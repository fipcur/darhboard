import { motion } from 'motion/react';
import { 
  TrendingDown, 
  TrendingUp, 
  Minus, 
  Activity, 
  DollarSign, 
  Zap,
  ShieldCheck,
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const AREA_DATA = [
  { name: 'Jan', cost: 1200, mileage: 800 },
  { name: 'Feb', cost: 1350, mileage: 900 },
  { name: 'Mar', cost: 1100, mileage: 850 },
  { name: 'Apr', cost: 1600, mileage: 1200 },
  { name: 'May', cost: 1400, mileage: 1000 },
  { name: 'Jun', cost: 1250, mileage: 950 },
  { name: 'Jul', cost: 1450, mileage: 1100 },
  { name: 'Aug', cost: 1700, mileage: 1300 },
];

const PIE_DATA = [
  { name: 'Routine', value: 60, color: '#a7c8ff' },
  { name: 'Repair', value: 25, color: '#ffb4ab' },
  { name: 'Cosmetic', value: 15, color: '#c8c6c5' },
];

export default function Analytics() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tighter text-white uppercase italic">Neural Analytics</h2>
          <p className="text-slate-500 font-mono text-[11px] tracking-widest uppercase">Stream: Active // Synchronization: 99.8%</p>
        </div>
        <div className="flex items-center bg-white/5 rounded-lg px-4 py-2 border border-white/10 backdrop-blur-md">
          <Calendar size={14} className="text-primary mr-3" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Lifecycle: 12_MONTHS</span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/3 p-6 rounded-xl border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-1 pt-10 h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Resource Output</span>
            <div className="bg-primary/10 p-2 rounded text-primary border border-primary/20"><DollarSign size={16} /></div>
          </div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-mono font-bold text-white tracking-tighter text-glow">$1,240</h3>
            <span className="text-error text-[10px] font-mono flex items-center">+4.2%</span>
          </div>
        </div>

        <div className="bg-white/3 p-6 rounded-xl border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Efficiency Delta</span>
            <div className="bg-secondary/10 p-2 rounded text-secondary border border-secondary/20"><Activity size={16} /></div>
          </div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-mono font-bold text-white tracking-tighter">$0.18</h3>
            <span className="text-primary text-[10px] font-mono flex items-center">-1.5%</span>
          </div>
        </div>

        <div className="bg-white/3 p-6 rounded-xl border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Core Optimization</span>
            <div className="bg-success/10 p-2 rounded text-success border border-success/20"><ShieldCheck size={16} /></div>
          </div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-mono font-bold text-white tracking-tighter">92%</h3>
          </div>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-white/3 p-8 rounded-2xl border border-white/5 shadow-2xl min-h-[450px] flex flex-col backdrop-blur-md">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">System Performance Matrix</h4>
            <div className="flex items-center gap-6 text-[9px] font-mono text-slate-500 uppercase">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(34,211,238,0.5)]" /> VALUE</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-600" /> MILEAGE</div>
            </div>
          </div>
          <div className="flex-1 -ml-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={AREA_DATA}>
                <defs>
                  <linearGradient id="colorCostAnalytics" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 9, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0c0e14', border: '1px solid #1e293b', borderRadius: '4px', fontSize: '10px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#22d3ee" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorCostAnalytics)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="mileage" 
                  stroke="#64748b" 
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  fill="none" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white/3 p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col backdrop-blur-md">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white underline decoration-primary/30 underline-offset-8 mb-10">Resource Fragmentation</h4>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-4xl font-mono font-bold text-white">74%</p>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">SLA_SYNCED</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 mt-6">
            {PIE_DATA.map((item) => (
              <div key={item.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-3 rounded-sm shadow-[0_0_8px_currentColor]" style={{ backgroundColor: item.color, color: item.color }} />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">{item.name}</span>
                </div>
                <span className="text-[10px] font-mono text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Section */}
      <section className="bg-cyber-gradient p-10 rounded-2xl border border-primary/20 relative overflow-hidden group shadow-2xl backdrop-blur-sm">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
          <Sparkles size={160} className="text-primary" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-20 h-20 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/30 cyan-glow animate-pulse">
              <Zap size={32} />
            </div>
            <div className="text-center md:text-left space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="bg-primary/20 text-primary px-3 py-0.5 rounded text-[8px] font-black uppercase tracking-[0.2em] border border-primary/30">AI_COGNITION</span>
                <span className="text-warning text-[9px] font-mono uppercase tracking-widest animate-pulse">!!_ANOMALY_DETECTED_!!</span>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-white uppercase italic">Predictive Wear Analysis</h5>
              <p className="text-[11px] text-slate-400 max-w-lg leading-relaxed font-mono uppercase tracking-tighter">
                Synchronized vibration telemetry indicates core component degradation. Protocol failure predicted in <span className="text-primary font-bold">12_CYCLES</span>.
              </p>
            </div>
          </div>
          <button className="bg-transparent border border-primary text-primary px-10 py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-primary hover:text-on-primary transition-all active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            EXEC_INSPECTION
          </button>
        </div>
      </section>
    </div>
  );
}
