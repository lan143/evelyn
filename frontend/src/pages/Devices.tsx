import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { controlDevice, getDevices } from '../api/client';
import type {
  DevicesSnapshot,
  SectionSnapshot,
  SensorReading,
  SwitchSnapshot,
} from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const POLL_INTERVAL_MS = 5_000;
// The device snapshots relay state in the loop task, so re-read after it
// settles instead of relying on the eventual 5 s poll.
const REFETCH_DELAYS_MS = [300, 1_000] as const;

function switchBadge(sw: SwitchSnapshot): { className: string; label: string } {
  if (!sw.available) {
    return { className: 'badge badge-danger', label: 'Unavailable' };
  }
  return sw.enabled
    ? { className: 'badge badge-on', label: 'On' }
    : { className: 'badge badge-off', label: 'Off' };
}

function formatSensorValue(sensor: SensorReading): string {
  if (typeof sensor.value === 'boolean') {
    // The gate contact is a door-class binary sensor: true means open.
    return sensor.value ? 'Open' : 'Closed';
  }
  switch (sensor.id) {
    case 'rainwater_pit_level':
      return sensor.value.toFixed(3);
    default:
      return String(sensor.value);
  }
}

function findSection(
  sections: SectionSnapshot[],
  id: string,
): SectionSnapshot | undefined {
  return sections.find((section) => section.id === id);
}

interface SwitchCardProps {
  sw: SwitchSnapshot;
  busy: boolean;
  onSet: (id: string, enabled: boolean) => void;
}

function SwitchCard({ sw, busy, onSet }: SwitchCardProps) {
  const badge = switchBadge(sw);
  const disabled = busy || !sw.available;

  return (
    <div class={`device-card${sw.available ? '' : ' is-unavailable'}`}>
      <div class="device-card-head">
        <span class="device-name">{sw.name}</span>
        <span class={badge.className}>{badge.label}</span>
      </div>
      <div class="device-actions">
        <Button
          variant={sw.available && !sw.enabled ? 'primary' : 'default'}
          disabled={disabled || sw.enabled}
          onClick={() => onSet(sw.id, true)}
        >
          On
        </Button>
        <Button
          variant={sw.available && sw.enabled ? 'primary' : 'default'}
          disabled={disabled || !sw.enabled}
          onClick={() => onSet(sw.id, false)}
        >
          Off
        </Button>
      </div>
      {sw.id === 'left_lawn_watering' ||
      sw.id === 'local_area_right_watering' ? (
        <p class="device-help">Turns off automatically after 20 minutes.</p>
      ) : null}
    </div>
  );
}

function SensorCard({ sensor }: { sensor: SensorReading }) {
  return (
    <div class={`sensor-card${sensor.available ? '' : ' is-unavailable'}`}>
      <span class="sensor-name">{sensor.name}</span>
      {sensor.available ? (
        <span class="sensor-value">
          {formatSensorValue(sensor)}
          {sensor.unit ? <span class="sensor-unit">{sensor.unit}</span> : null}
        </span>
      ) : (
        <span class="sensor-value sensor-unavailable">&mdash;</span>
      )}
    </div>
  );
}

function SwitchSection({
  section,
  inFlight,
  onSet,
}: {
  section: SectionSnapshot;
  inFlight: ReadonlyArray<string>;
  onSet: (id: string, enabled: boolean) => void;
}) {
  return (
    <Card title={section.name}>
      <div class="device-grid">
        {(section.switches ?? []).map((sw) => (
          <SwitchCard
            key={sw.id}
            sw={sw}
            busy={inFlight.includes(sw.id)}
            onSet={onSet}
          />
        ))}
      </div>
    </Card>
  );
}

export function DevicesPage() {
  const [snapshot, setSnapshot] = useState<DevicesSnapshot | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [commandError, setCommandError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [inFlight, setInFlight] = useState<ReadonlyArray<string>>([]);
  const savingCountRef = useRef(0);
  const timersRef = useRef<number[]>([]);

  const load = useCallback(async () => {
    const result = await getDevices();
    if (result.ok) {
      setSnapshot(result.data);
      setLoadError(null);
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => {
      if (savingCountRef.current === 0) {
        void load();
      }
    }, POLL_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [load]);

  useEffect(() => {
    return () => {
      for (const t of timersRef.current) {
        window.clearTimeout(t);
      }
    };
  }, []);

  const scheduleRefetch = useCallback(() => {
    for (const delayMs of REFETCH_DELAYS_MS) {
      const timer = window.setTimeout(() => {
        timersRef.current = timersRef.current.filter((t) => t !== timer);
        void load();
      }, delayMs);
      timersRef.current.push(timer);
    }
  }, [load]);

  const beginSave = useCallback((id: string) => {
    savingCountRef.current += 1;
    setInFlight((current) => (current.includes(id) ? current : [...current, id]));
  }, []);

  const endSave = useCallback((id: string) => {
    savingCountRef.current = Math.max(0, savingCountRef.current - 1);
    setInFlight((current) => current.filter((value) => value !== id));
  }, []);

  const setSwitch = useCallback(
    async (id: string, enabled: boolean) => {
      setCommandError(null);
      beginSave(id);
      try {
        const result = await controlDevice({ id, enabled });
        if (result.ok) {
          scheduleRefetch();
        } else {
          setCommandError(result.message);
        }
      } catch (error) {
        setCommandError(error instanceof Error ? error.message : String(error));
      } finally {
        endSave(id);
      }
    },
    [beginSave, endSave, scheduleRefetch],
  );

  if (!loaded) {
    return (
      <Card title="Devices">
        <p class="muted">Loading devices&hellip;</p>
      </Card>
    );
  }

  const sections = snapshot?.sections ?? [];
  const lighting = findSection(sections, 'lighting');
  const watering = findSection(sections, 'watering');
  const sensors = findSection(sections, 'sensors');

  return (
    <div class="stack">
      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
        </>
      ) : null}

      {commandError ? (
        <Banner
          kind="error"
          message={commandError}
          onClose={() => setCommandError(null)}
        />
      ) : null}

      <div class="form-actions">
        <Button onClick={() => void load()}>Refresh</Button>
      </div>

      {lighting ? (
        <SwitchSection section={lighting} inFlight={inFlight} onSet={(id, enabled) => void setSwitch(id, enabled)} />
      ) : null}

      {watering ? (
        <SwitchSection section={watering} inFlight={inFlight} onSet={(id, enabled) => void setSwitch(id, enabled)} />
      ) : null}

      {sensors ? (
        <Card title={sensors.name}>
          <div class="sensor-grid">
            {(sensors.sensors ?? []).map((sensor) => (
              <SensorCard key={sensor.id} sensor={sensor} />
            ))}
          </div>
        </Card>
      ) : null}

      <p class="muted">
        Device values refresh automatically every 5 seconds. The watering
        relays switch off by themselves after 20 minutes.
      </p>
    </div>
  );
}
