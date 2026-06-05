import { useState } from 'react';
import MaintenanceHistory from './maintenance/MaintenanceHistory';
import MaintenanceForm from './maintenance/MaintenanceForm';

export default function Maintenance() {
  const [view, setView] = useState<'history' | 'add'>('history');

  return (
    <div className="h-full">
      {view === 'history' ? (
        <MaintenanceHistory onAddNew={() => setView('add')} />
      ) : (
        <MaintenanceForm onCancel={() => setView('history')} />
      )}
    </div>
  );
}
