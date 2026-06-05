import { MapPin, Calendar, ArrowRight, Activity, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { UpcomingService } from '../../types';

const SCHEDULE: UpcomingService[] = [
  {
    id: '1',
    day: 'Tuesday',
    date: 'Oct 12',
    title: 'Scheduled Maintenance',
    vehicle: 'Ford Transit #402',
    location: 'Main St. Garage',
    status: 'scheduled'
  },
  {
    id: '2',
    day: 'Friday',
    date: 'Oct 15',
    title: 'Battery Health Check',
    vehicle: 'Tesla Model Y #109',
    location: 'Tesla Center',
    status: 'pending'
  },
  {
    id: '3',
    day: 'Monday',
    date: 'Oct 18',
    title: 'Registration Renewal',
    vehicle: 'Fleet-wide Audit',
    location: 'HQ Office',
    status: 'pending'
  }
];

export default function Timeline() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white flex items-center gap-2">
          <div className="w-1 h-3 bg-primary"></div>
          Maintenance_Protocol
        </h3>
        <button className="text-primary text-[9px] font-black tracking-widest uppercase hover:text-white flex items-center gap-1.5 transition-all text-glow">
          HISTORY_ARCHIVE <ArrowRight size={10} />
        </button>
      </div>

      <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative pl-6 border-l border-white/10 space-y-10">
          {SCHEDULE.map((item, idx) => (
            <div key={item.id} className="relative">
              <div className={cn(
                "absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full border-2 border-surface transition-all z-10",
                idx === 0 ? "bg-primary shadow-[0_0_12px_rgba(34,211,238,0.8)]" : "bg-slate-700 border-white/20"
              )} />
              
              <div className="flex items-center gap-3">
                <p className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] font-mono",
                  idx === 0 ? "text-primary" : "text-slate-500"
                )}>
                  {item.day}__{item.date.replace(' ', '_').toUpperCase()}
                </p>
                {idx === 0 && <span className="bg-primary/10 text-primary text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter border border-primary/20">Active_Node</span>}
              </div>
              
              <motion.div 
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(34,211,238,0.4)' }}
                className={cn(
                  "mt-3 p-4 rounded-xl border transition-all cursor-pointer group relative overflow-hidden",
                  idx === 0 
                    ? "bg-white/5 border-primary/30 cyan-glow" 
                    : "bg-transparent border-white/5"
                )}
              >
                <div className="relative z-10">
                  <p className="text-[12px] font-black text-white uppercase tracking-wider italic">{item.title}</p>
                  <p className="text-[10px] text-on-surface-variant font-mono mt-1 opacity-70">METADATA: {item.vehicle.replace(' ', '_').toUpperCase()}</p>
                  
                  {item.location && (
                    <div className="mt-4 flex items-center gap-2 text-slate-400">
                      <MapPin size={12} className="text-primary/70" />
                      <span className="text-[9px] font-black uppercase tracking-[0.1em] opacity-60">LOC_ID: {item.location.toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <Activity size={40} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-white/2 border border-white/5 rounded-lg text-[9px] font-black uppercase tracking-[0.4em] hover:bg-white/5 hover:border-white/10 transition-all active:scale-[0.98] text-slate-500 hover:text-white">
          LOAD_FULL_CALENDAR_STREAM
        </button>
      </div>

      <div className="bg-gradient-to-br from-primary/10 via-transparent to-transparent p-6 rounded-2xl border border-primary/20 relative overflow-hidden group shadow-xl backdrop-blur-md">
        <div className="absolute -right-8 -bottom-8 opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-1000 grayscale">
          <Calendar size={140} className="text-primary" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 p-2 rounded-lg text-primary cyan-glow">
              <Zap size={14} />
            </div>
            <h4 className="font-extrabold text-[11px] uppercase tracking-[0.3em] text-white italic">Neural_Insights_Engine</h4>
          </div>
          <p className="text-[12px] text-on-surface-variant leading-relaxed font-bold tracking-tight uppercase">
            Projected anomaly detected: <span className="text-primary text-glow underline underline-offset-4 decoration-primary/30">4_UNIT_FAILURE_RISK</span> within next maintenance cycle.
          </p>
          <button className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all group/btn">
            OPT_SCHEDULE_FLOW <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
