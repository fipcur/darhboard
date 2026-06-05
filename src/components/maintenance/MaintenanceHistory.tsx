import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  FileBox, 
  Droplets, 
  Settings as SettingsIcon,
  CircleAlert, 
  CheckCircle2, 
  Clock,
  MoreVertical,
  Activity,
  History
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { MaintenanceRecord } from '../../types';

interface MaintenanceHistoryProps {
  onAddNew: () => void;
}

const MOCK_HISTORY: MaintenanceRecord[] = [
  {
    id: '1',
    date: 'Oct 24, 2024',
    time: '09:15 AM',
    serviceItem: 'Full Synthetic Oil Change',
    category: 'Oil & Fluids',
    garage: 'Grand Master Garage',
    location: 'Bangkok Central',
    mileage: '42,500 km',
    vehicle: 'Fleet #402',
    cost: 2450.00,
    status: 'Completed'
  },
  {
    id: '2',
    date: 'Sep 15, 2024',
    time: '02:30 PM',
    serviceItem: 'Front Brake Pads Replacement',
    category: 'Braking System',
    garage: 'V-Spec Performance',
    location: 'Ayutthaya Hub',
    mileage: '38,120 km',
    vehicle: 'Fleet #109',
    cost: 5800.00,
    status: 'Warranty' // Color it blue
  },
  {
    id: '3',
    date: 'Aug 02, 2024',
    time: '11:00 AM',
    serviceItem: 'Battery Health & Charge Test',
    category: 'Electrical',
    garage: 'Official Service Center',
    location: 'Siam Square',
    mileage: '35,400 km',
    vehicle: 'Fleet #221',
    cost: 850.00,
    status: 'Completed'
  },
  {
    id: '4',
    date: 'Jul 12, 2024',
    time: '08:00 AM',
    serviceItem: 'Major Engine Overhaul',
    category: 'Engine',
    garage: 'Elite Moto Works',
    location: 'Bang Na District',
    mileage: '32,900 km',
    vehicle: 'Fleet #402',
    cost: 12500.00,
    status: 'Completed'
  }
];

export default function MaintenanceHistory({ onAddNew }: MaintenanceHistoryProps) {
  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-primary font-mono text-[10px] tracking-[0.3em] uppercase">
            <Activity size={12} />
            System_Logs__024
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white mt-1">Maintenance History</h2>
          <p className="text-on-surface-variant font-medium max-w-lg">Comprehensive view of your vehicle maintenance ecosystem with real-time telemetry analysis.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg font-bold text-[10px] tracking-widest uppercase hover:bg-white/10 transition-all text-slate-400">
            <Download size={14} className="text-primary" />
            <span>Export_CSV</span>
          </button>
          <button 
            onClick={onAddNew}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-[10px] tracking-widest uppercase hover:brightness-110 transition-all shadow-lg shadow-primary/20 cyan-glow"
          >
            <Plus size={14} />
            <span>Add_Record</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative group">
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="SEARCH_RECORDS_BY_METADATA..."
            className="w-full bg-white/3 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-[11px] font-bold tracking-wider placeholder:text-white/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 outline-none transition-all uppercase"
          />
        </div>
        <div className="relative group">
          <Filter size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary" />
          <select className="w-full bg-white/3 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-[11px] font-bold appearance-none outline-none focus:ring-1 focus:ring-primary/40 text-white flex items-center uppercase tracking-wider">
            <option className="bg-surface">All Categories</option>
            <option className="bg-surface">Oil & Fluids</option>
            <option className="bg-surface">Tires</option>
            <option className="bg-surface">Engine</option>
          </select>
        </div>
        <div className="relative group">
          <History size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary" />
          <select className="w-full bg-white/3 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-[11px] font-bold appearance-none outline-none focus:ring-1 focus:ring-primary/40 text-white flex items-center uppercase tracking-wider">
            <option className="bg-surface">All Time</option>
            <option className="bg-surface">Last 30 Days</option>
            <option className="bg-surface">Last 6 Months</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/3 border-b border-white/5">
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Timestamp</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Service_Class</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Operational_Hub</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Telemetry</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-right">Resource_Output (THB)</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-center">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {MOCK_HISTORY.map((record) => (
                <tr key={record.id} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <td className="px-6 py-5 whitespace-nowrap">
                    <p className="text-[11px] font-bold text-white tracking-widest uppercase">{record.date}</p>
                    <p className="text-[9px] text-on-surface-variant font-medium tracking-tighter opacity-60">[{record.time}]</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center border transition-all group-hover:scale-105",
                        record.category === 'Oil & Fluids' && "bg-primary/10 text-primary border-primary/20",
                        record.category === 'Braking System' && "bg-warning/10 text-warning border-warning/20",
                        record.category === 'Electrical' && "bg-error/10 text-error border-error/20",
                        record.category === 'Engine' && "bg-secondary/10 text-secondary border-secondary/20",
                      )}>
                        {record.category === 'Oil & Fluids' && <Activity size={16} />}
                        {record.category === 'Braking System' && <Activity size={16} />}
                        {record.category === 'Electrical' && <Activity size={16} />}
                        {record.category === 'Engine' && <Activity size={16} />}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-tight">{record.serviceItem}</p>
                        <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-widest mt-0.5 opacity-60">{record.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-[11px] font-bold text-white uppercase tracking-tight">{record.garage}</p>
                    <p className="text-[9px] text-on-surface-variant font-medium uppercase tracking-tighter opacity-60">{record.location}</p>
                  </td>
                  <td className="px-6 py-5 font-mono text-[10px] text-primary/80 font-bold tracking-widest">
                    {record.mileage}
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-primary text-[11px] tracking-widest">
                    ฿{record.cost.toLocaleString()}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={cn(
                      "px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest border",
                      record.status === 'Completed' && "bg-success/10 text-success border-success/20",
                      record.status === 'Warranty' && "bg-primary/10 text-primary border-primary/20 text-glow",
                    )}>
                      {record.status === 'Completed' ? 'SUCCESS_VERIFIED' : record.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
                      <MoreVertical size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Featured Insight Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group shadow-xl">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000 grayscale">
            <Activity size={120} />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
            <div className="w-28 h-28 rounded-xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
               <img 
                 src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=300&h=300&fit=crop" 
                 alt="Engine" 
                 className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
               />
            </div>
            <div className="text-center md:text-left">
              <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded text-[8px] font-black uppercase tracking-[0.2em] text-glow">PREDICTIVE_ALERT_V2</span>
              <h4 className="text-xl font-extrabold mt-3 tracking-tight text-white uppercase italic">Critical System Degradation</h4>
              <p className="text-[11px] text-on-surface-variant mt-2 max-w-sm leading-relaxed font-bold tracking-tight">
                TRANSMISSION_VIBRATION: <span className="text-error">+12%_DEVIATION</span>. RECON_MANDATORY: <span className="text-primary font-bold">~1,200_KM</span>.
              </p>
              <button className="mt-4 text-primary text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-all">INITIATE_SERVICE_FLOW</button>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg text-primary cyan-glow">
                <Download size={18} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Annual Fleet Audit</p>
            </div>
            <p className="text-[13px] text-on-surface-variant font-medium leading-relaxed">
              ST_METRICS_READY: COST_VARIABILITY_DECREASED <span className="text-success font-bold">[-8.4%]</span>. 
              Efficiency optimization confirmed across all sectors.
            </p>
          </div>
          <button className="mt-8 w-full py-4 bg-white/3 border border-white/10 text-white rounded-lg font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
             GENERATE_SYSTEM_RECON_REPORT
          </button>
        </div>
      </div>
    </div>
  );
}
