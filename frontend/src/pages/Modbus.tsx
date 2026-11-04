import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import {
  getModbusSettings,
  postModbusSettings,
  reboot,
  LIMITS,
} from '../api/client';
import { Banner } from '../components/Banner';
import { Button, DangerButton } from '../components/Button';
import { Card } from '../components/Card';
import { Field } from '../components/Field';
import { NeedsRebootNotice } from '../components/NeedsRebootNotice';
import { RebootOverlay, useRebootFlow } from '../components/RebootFlow';
import { Select, type SelectOption } from '../components/Select';

interface ModbusForm {
  modbusSpeed: string;
  modbusAddressWBMR6C: string;
  modbusAddressQDY30A: string;
}

interface ModbusErrors {
  modbusAddressWBMR6C?: string;
  modbusAddressQDY30A?: string;
}

const EMPTY_MODBUS: ModbusForm = {
  modbusSpeed: '9600',
  modbusAddressWBMR6C: '',
  modbusAddressQDY30A: '',
};

function parseNumber(raw: string): number | null {
  if (raw.trim() === '') {
    return null;
  }
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function hasErrors(errors: object): boolean {
  return Object.values(errors).some((message) => Boolean(message));
}

function speedOptions(current: string): SelectOption[] {
  const options: SelectOption[] = LIMITS.modbus.speeds.map((speed) => ({
    value: String(speed),
    label: `${speed} baud`,
  }));
  const value = parseNumber(current);
  if (
    value !== null &&
    !(LIMITS.modbus.speeds as readonly number[]).includes(value)
  ) {
    options.unshift({ value: current, label: `${current} (current)` });
  }
  return options;
}

function validateAddress(raw: string, label: string): string | undefined {
  const value = parseNumber(raw);
  if (
    value === null ||
    !Number.isInteger(value) ||
    value < LIMITS.modbus.addressMin ||
    value > LIMITS.modbus.addressMax
  ) {
    return `${label} must be an integer between ${LIMITS.modbus.addressMin} and ${LIMITS.modbus.addressMax}.`;
  }
  return undefined;
}

export function ModbusPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [modbus, setModbus] = useState<ModbusForm>(EMPTY_MODBUS);
  const [modbusErrors, setModbusErrors] = useState<ModbusErrors>({});

  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [needsReboot, setNeedsReboot] = useState(false);
  const [rebootError, setRebootError] = useState<string | null>(null);
  const [rebooting, setRebooting] = useState(false);
  const rebootFlow = useRebootFlow();

  const options = useMemo(
    () => speedOptions(modbus.modbusSpeed),
    [modbus.modbusSpeed],
  );

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getModbusSettings();
    if (result.ok) {
      setModbus({
        modbusSpeed: String(result.data.modbusSpeed),
        modbusAddressWBMR6C: String(result.data.modbusAddressWBMR6C),
        modbusAddressQDY30A: String(result.data.modbusAddressQDY30A),
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const updateModbus = (patch: Partial<ModbusForm>) =>
    setModbus((current) => ({ ...current, ...patch }));

  const beginSave = () => {
    setSaving(true);
    setNotice(null);
    setSaveError(null);
    setRebootError(null);
  };

  const handleModbusSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const nextErrors: ModbusErrors = {
        modbusAddressWBMR6C: validateAddress(
          modbus.modbusAddressWBMR6C,
          'WB-MR6C address',
        ),
        modbusAddressQDY30A: validateAddress(
          modbus.modbusAddressQDY30A,
          'QDY30A address',
        ),
      };
      setModbusErrors(nextErrors);
      if (hasErrors(nextErrors)) {
        return;
      }

      beginSave();
      try {
        const result = await postModbusSettings({
          modbusSpeed: Number(modbus.modbusSpeed),
          modbusAddressWBMR6C: Number(modbus.modbusAddressWBMR6C),
          modbusAddressQDY30A: Number(modbus.modbusAddressQDY30A),
        });
        if (result.ok) {
          setNotice('Modbus settings saved to flash.');
          setNeedsReboot(true);
        } else {
          setSaveError(result.message);
        }
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : String(error));
      } finally {
        setSaving(false);
      }
    },
    [modbus],
  );

  const handleReboot = useCallback(async () => {
    const confirmed = window.confirm(
      'Reboot the device now? Automation and MQTT reporting will be offline for about 20-60 seconds.',
    );
    if (!confirmed) {
      return;
    }
    setRebootError(null);
    setRebooting(true);
    const result = await reboot();
    setRebooting(false);
    if (result.ok) {
      rebootFlow.start();
    } else {
      setRebootError(result.message);
    }
  }, [rebootFlow.start]);

  if (!loaded) {
    return (
      <Card title="Modbus">
        <p class="muted">Loading Modbus settings&hellip;</p>
      </Card>
    );
  }

  return (
    <div class="stack">
      <NeedsRebootNotice />

      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}

      <Card title="Modbus">
        {/* novalidate: JS validators own error rendering; native constraint validation would silently block submit. */}
        <form onSubmit={handleModbusSubmit} novalidate>
          <Select
            label="Bus speed"
            value={modbus.modbusSpeed}
            options={options}
            onChange={(value) => updateModbus({ modbusSpeed: value })}
            help="Applies immediately after save. Only the speeds supported by the firmware are listed."
            disabled={saving}
          />
          <Field
            label="WB-MR6C address"
            value={modbus.modbusAddressWBMR6C}
            onInput={(value) =>
              updateModbus({ modbusAddressWBMR6C: value })
            }
            type="number"
            min={LIMITS.modbus.addressMin}
            max={LIMITS.modbus.addressMax}
            inputMode="numeric"
            error={modbusErrors.modbusAddressWBMR6C}
            help="Relay module on the shared bus. Requires a reboot to take effect."
            disabled={saving}
          />
          <Field
            label="QDY30A address"
            value={modbus.modbusAddressQDY30A}
            onInput={(value) =>
              updateModbus({ modbusAddressQDY30A: value })
            }
            type="number"
            min={LIMITS.modbus.addressMin}
            max={LIMITS.modbus.addressMax}
            inputMode="numeric"
            error={modbusErrors.modbusAddressQDY30A}
            help="Rainwater pit level sensor. Requires a reboot to take effect."
            disabled={saving}
          />
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={saving}>
              {saving ? 'Saving\u2026' : 'Save Modbus'}
            </Button>
          </div>
        </form>
      </Card>

      {notice ? (
        <Banner kind="success" message={notice} onClose={() => setNotice(null)} />
      ) : null}
      {saveError ? (
        <Banner
          kind="error"
          message={saveError}
          onClose={() => setSaveError(null)}
        />
      ) : null}

      <Card title="Reboot">
        <p class="muted">
          Modbus addresses are read during startup, so they apply only after a
          reboot.
          {needsReboot ? ' Settings saved \u2014 reboot to apply them.' : ''}
        </p>
        {rebootError ? (
          <Banner
            kind="error"
            message={rebootError}
            onClose={() => setRebootError(null)}
          />
        ) : null}
        <div class="form-actions">
          <DangerButton
            onClick={() => void handleReboot()}
            disabled={rebooting || rebootFlow.phase !== 'idle'}
          >
            Reboot device
          </DangerButton>
        </div>
      </Card>

      <RebootOverlay flow={rebootFlow} />
    </div>
  );
}
