import { motion } from 'motion/react';
import { MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { MaintenanceRecord } from '../../types';

const MOCK_RECORDS: MaintenanceRecord[] = [
  {
    id: '1',
    date: 'Sep 28, 2023',
    time: '09:15 AM',
    serviceItem: 'Oil Change & Filter',
    category: 'Fluid Service',
    garage: 'Precision Auto',
    location: 'Bangkok Central',
    mileage: '42,500 miles',
    vehicle: 'Tesla Model 3',
    cost: 185.00,
    status: 'Completed'
  },
  {
    id: '2',
    date: 'Oct 05, 2023',
    time: '02:30 PM',
    serviceItem: 'Brake Pad Replacement',
    category: 'Braking System',
    garage: 'City Fleet Center',
    location: 'Ayutthaya Hub',
    mileage: '68,200 miles',
    vehicle: 'Chevy Bolt',
    cost: 420.00,
    status: 'Pending'
  },
  {
    id: '3',
    date: 'Sep 15, 2023',
    time: '11:00 AM',
    serviceItem: 'Annual Inspection',
    category: 'General',
    garage: 'Rivian Service',
    location: 'North Branch',
    mileage: '12,100 miles',
    vehicle: 'Rivian R1T',
    cost: 0.00,
    status: 'Overdue'
  },
  {
    id: '4',
    date: 'Sep 10, 2023',
    time: '08:00 AM',
    serviceItem: 'Tire Rotation',
    category: 'Tires',
    garage: 'QuickLane',
    location: 'Main St.',
    mileage: '30,000 miles',
    vehicle: 'Ford F-150',
    cost: 85.00,
    status: 'Completed'
  }
];

export default function RecordTable() {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative">
      <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-white/2">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-4 bg-primary cyan-glow"></div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white italic">Operational_Log_Stream</h3>
        </div>
        <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-[9px] font-black uppercase tracking-widest text-on-surface-variant outline-none focus:border-primary/50 text-white cursor-pointer transition-all">
          <option className="bg-surface">FILTER: ALL_NODES</option>
          <option className="bg-surface">FILTER: SUCCESS_VERIFIED</option>
          <option className="bg-surface">FILTER: PENDING_OP</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/1">
              <th className="px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Timestamp</th>
              <th className="px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Operational_Target</th>
              <th className="px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Hub_Loc</th>
              <th className="px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">Protocol_Status</th>
              <th className="px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-right">Value_Output</th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MOCK_RECORDS.map((record) => (
              <motion.tr 
                key={record.id}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="group cursor-pointer transition-colors"
              >
                <td className="px-8 py-5 whitespace-nowrap">
                  <p className="text-[11px] font-black text-white tracking-widest uppercase">{record.date}</p>
                  <p className="text-[9px] text-on-surface-variant font-mono opacity-60">[{record.time}]</p>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-white tracking-widest uppercase italic group-hover:text-primary transition-colors">{record.serviceItem}</span>
                    <span className="text-[9px] text-on-surface-variant font-mono tracking-tighter uppercase opacity-60 mt-1">{record.mileage.toUpperCase()} • {record.vehicle.toUpperCase()}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <p className="text-[11px] text-white font-black uppercase tracking-tight">{record.garage}</p>
                  <p className="text-[9px] text-on-surface-variant font-mono tracking-tighter uppercase opacity-60">{record.location}</p>
                </td>
                <td className="px-8 py-3 text-center">
                  <span className={cn(
                    "px-2.5 py-1 rounded text-[8px] font-black uppercase tracking-widest border",
                    record.status === 'Completed' && "bg-success/10 text-success border-success/20",
                    record.status === 'Pending' && "bg-warning/10 text-warning border-warning/20 text-glow",
                    record.status === 'Overdue' && "bg-error/10 text-error border-error/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]",
                  )}>
                    {record.status === 'Completed' ? 'VERIFIED' : record.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-8 py-5 text-[11px] font-mono font-bold text-right text-primary/80 tracking-widest">
                  ${record.cost.toFixed(2)}
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
                    <MoreHorizontal size={14} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-4 bg-white/2 border-t border-white/5 flex items-center justify-between">
        <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-[0.3em]">Buffer_Load: 4/128_NODES</p>
        <div className="flex gap-3">
          <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 text-on-surface-variant disabled:opacity-20 transition-all hover:text-white">
            <ChevronLeft size={14} />
          </button>
          <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 text-on-surface-variant transition-all hover:text-white">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
