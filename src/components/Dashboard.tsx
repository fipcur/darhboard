import { 
  FileDown, 
  Plus, 
  Calendar, 
  Activity, 
  DollarSign, 
  TrendingUp, 
  Truck
} from 'lucide-react';
import StatCard from './dashboard/StatCard';
import RecordTable from './dashboard/RecordTable';
import Timeline from './dashboard/Timeline';

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-extrabold tracking-tighter text-white uppercase italic leading-none">Command Center</h2>
          <p className="text-slate-500 font-mono text-[11px] tracking-widest uppercase mt-4">Sector: 01 // Fleet_ID: VND-409 // Synchronization: OPTIMAL</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/2 border border-white/10 rounded font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all active:scale-95 text-slate-300">
            <FileDown size={14} className="text-primary" />
            <span>EXPORT_DATA</span>
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded font-bold text-[9px] uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] active:scale-95">
            <Plus size={14} />
            <span>NEW_PROTOCOL</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Lifecycle Event"
          value="Oct_12"
          subtitle="FORD_TRANSIT__402"
          highlight
          icon={Calendar}
        />
        <StatCard 
          title="Active Units"
          value="24"
          subtitle="Sector Coverage: 100%"
          trend={{ value: "2_NEW", type: 'up' }}
          icon={Truck}
        />
        <StatCard 
          title="Core Health"
          value="92%"
          progress={92}
          subtitle="System Load: Stable"
          icon={Activity}
        />
        <StatCard 
          title="Resource Burn"
          value="4.2k"
          subtitle="Δ Current Period: -12%"
          trend={{ value: "12%", type: 'down' }}
          icon={DollarSign}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <RecordTable />
          
          {/* Integrated Monitor Image Banner */}
          <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl relative h-72 group backdrop-blur-md">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop" 
              alt="Workshop" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent flex flex-col justify-end p-10">
              <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-3 bg-primary/20 backdrop-blur-md px-4 py-1.5 border border-primary/30 rounded text-[9px] font-bold text-primary uppercase tracking-[0.2em] w-fit mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <TrendingUp size={12} />
                  <span>NEURAL DIAGNOSTIC OVERLAY</span>
                </div>
                <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter leading-tight">Advanced Fleet Monitoring</h3>
                <p className="text-[11px] text-slate-400 font-mono tracking-tighter uppercase mt-4 leading-relaxed max-w-md">
                  Sensor synchronization successful. Wear pattern recognition enabled. Delta optimization active across all monitored units.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Timeline />
      </div>
    </div>
  );
}
