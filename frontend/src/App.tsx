import { useState } from 'preact/hooks';
import { TabBar, type TabItem } from './components/TabBar';
import { BackupPanel } from './pages/Backup';
import { DevicesPage } from './pages/Devices';
import { LoggerSettingsPage } from './pages/Logger';
import { ModbusPage } from './pages/Modbus';
import { MqttSettingsPage } from './pages/MqttSettings';
import { NetworkPage } from './pages/Network';
import { StatusPage } from './pages/Status';

type TabId =
  | 'status'
  | 'devices'
  | 'logger'
  | 'modbus'
  | 'mqtt'
  | 'network'
  | 'backup';

const TABS: ReadonlyArray<TabItem<TabId>> = [
  { id: 'status', label: 'Status' },
  { id: 'devices', label: 'Devices' },
  { id: 'logger', label: 'Logger' },
  { id: 'modbus', label: 'Modbus' },
  { id: 'mqtt', label: 'MQTT' },
  { id: 'network', label: 'Network' },
  { id: 'backup', label: 'Backup' },
];

function renderPanel(tab: TabId) {
  switch (tab) {
    case 'status':
      return <StatusPage />;
    case 'devices':
      return <DevicesPage />;
    case 'logger':
      return <LoggerSettingsPage />;
    case 'modbus':
      return <ModbusPage />;
    case 'mqtt':
      return <MqttSettingsPage />;
    case 'network':
      return <NetworkPage />;
    case 'backup':
      return <BackupPanel />;
  }
}

export function App() {
  const [tab, setTab] = useState<TabId>('status');

  return (
    <>
      <header class="app-header">
        <div class="brand">
          <h1>Evelyn</h1>
        </div>
        <span class="hint">WB-MGE yard controller</span>
      </header>
      <TabBar tabs={TABS} active={tab} onSelect={setTab} />
      <main
        class="tab-content"
        id={`panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
      >
        {renderPanel(tab)}
      </main>
    </>
  );
}
