import { 
  Calendar, 
  MapPin, 
  Car, 
  FileText, 
  DollarSign, 
  Upload, 
  Info,
  CheckCircle,
  X,
  Star,
  ChevronRight,
  ShieldCheck,
  Activity,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export default function MaintenanceForm({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.3em]">
        <span className="hover:text-primary cursor-pointer transition-colors opacity-60">Fleet_Network</span>
        <ChevronRight size={12} className="opacity-40" />
        <span className="hover:text-primary cursor-pointer transition-colors opacity-60">Maintenance</span>
        <ChevronRight size={12} className="opacity-40" />
        <span className="text-primary text-glow">Data_Entry_Node</span>
      </nav>

      <div className="glass-panel rounded-2xl border border-white/5 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {/* Form Header */}
        <div className="p-8 border-b border-white/5 bg-white/2">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5 cyan-glow">
              <FileText size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-[0.05em] text-white uppercase italic">Record Compilation</h3>
              <p className="text-[11px] text-on-surface-variant font-bold tracking-widest mt-1 opacity-70">METADATA_INPUT: CLASSIFY_NEW_SERVICE_EVENT</p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form className="p-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Event_Timestamp</label>
              <div className="relative group">
                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="date" 
                  defaultValue="2023-10-27"
                  className="w-full bg-white/3 border border-white/10 px-12 py-3.5 rounded-lg outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-[11px] font-mono tracking-widest text-white uppercase"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Telemetry_Distance</label>
              <div className="relative group">
                <Activity size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-black text-primary tracking-widest opacity-60">KM_REF</span>
                <input 
                  type="number" 
                  placeholder="000,000"
                  className="w-full bg-white/3 border border-white/10 px-12 py-3.5 rounded-lg outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-[11px] font-mono tracking-widest text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Asset_Class</label>
              <div className="relative group">
                <Car size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <select className="w-full bg-white/3 border border-white/10 px-12 py-3.5 rounded-lg outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-[11px] font-mono tracking-widest text-white appearance-none uppercase">
                  <option className="bg-surface" disabled selected>SELECT_CATEGORY</option>
                  <option className="bg-surface" value="oil">OIL_FLUID_REPLACE</option>
                  <option className="bg-surface" value="tires">TRACTION_ALIGNMENT</option>
                  <option className="bg-surface" value="brakes">KINETIC_STOP_SYSTEM</option>
                  <option className="bg-surface" value="engine">CORE_PROPULSION</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Operation_Hub</label>
              <div className="relative group">
                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  id="garage-input"
                  placeholder="SERVICE_POINT_NAME"
                  className="w-full bg-white/3 border border-white/10 px-12 py-3.5 rounded-lg outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-[11px] font-mono tracking-widest text-white uppercase placeholder:opacity-30"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Directive_Manifest</label>
            <textarea 
              rows={3}
              placeholder="DETAILED_SERVICE_REPORT..."
              className="w-full bg-white/3 border border-white/10 px-5 py-4 rounded-lg outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-[11px] font-mono tracking-widest text-white resize-none uppercase placeholder:opacity-30"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Resource_Cost_Alloc</label>
              <div className="relative group">
                <DollarSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-white/3 border border-white/10 px-12 py-3.5 rounded-lg outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-[11px] font-mono tracking-widest text-white"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Evidence_Packet</label>
              <div className="relative cursor-pointer border-2 border-dashed border-white/5 rounded-lg p-3 bg-white/2 hover:border-primary/40 transition-all flex items-center justify-center gap-3 group">
                <Upload size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest group-hover:text-white transition-colors">UPLOAD_INVOICE_BLOB</span>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-primary/5 rounded-xl border border-primary/20 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <Info size={16} className="text-primary shrink-0 mt-0.5" />
            <p className="text-[10px] text-on-surface-variant leading-relaxed font-bold tracking-wide uppercase">
              RE_CALC_PROTOCOL: Suggested service intervals will be adjusted post-submission based on integrated <span className="text-primary">Fleet_Neural_Predictions</span>.
            </p>
          </div>

          <div className="flex items-center justify-end gap-5 pt-8 border-t border-white/5">
            <button 
              type="button"
              onClick={onCancel}
              className="px-8 py-3.5 rounded-lg border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase text-on-surface-variant hover:text-white hover:bg-white/5 transition-all active:scale-95"
            >
              Abort_Op
            </button>
            <button 
              type="submit"
              className="px-10 py-3.5 rounded-lg bg-primary text-on-primary font-black tracking-[0.3em] uppercase flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95 cyan-glow"
            >
              <CheckCircle size={16} />
              COMMIT_RECORD
            </button>
          </div>
        </form>
      </div>

      {/* Recommended Centers */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-white uppercase tracking-[0.2em] flex items-center gap-4">
            <div className="w-[1px] h-6 bg-primary"></div>
            Operational_Service_Hubs
          </h3>
          <button className="text-primary text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-all">GRID_VIEW_ALL</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mock Map */}
          <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-surface group italic">
            <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=400&fit=crop" 
               className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity brightness-50 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Map Overlay Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Mock Pins */}
            <div className="absolute top-[30%] left-[40%] text-primary animate-pulse group cursor-pointer">
              <MapPin size={28} fill="currentColor" fillOpacity={0.4} strokeWidth={2.5} className="cyan-glow" />
              <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 glass-panel px-3 py-2 rounded text-[9px] font-black border border-primary/40 shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 tracking-widest text-white uppercase italic">
                AUTOTECH_EXPRESS_[ST-01]
              </div>
            </div>

            <div className="absolute bottom-5 right-5 flex flex-col gap-2">
              <button className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 text-white transition-all"><Plus size={14} /></button>
              <button className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 text-white transition-all"><X size={14} /></button>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: 'AUTOTECH_EXPRESS', rating: '4.9', dist: '0.8_KM', fast: true },
              { name: 'B-QUICK_SYSTEMS', rating: '4.7', dist: '1.2_KM', fast: true },
              { name: 'PREMIER_CARE_LOG', rating: '4.8', dist: '2.5_KM', fast: false },
            ].map((garage) => (
              <div 
                key={garage.name}
                onClick={() => {
                  const input = document.getElementById('garage-input') as HTMLInputElement;
                  if (input) input.value = garage.name;
                }}
                className="glass-panel p-4 rounded-xl border border-white/5 hover:border-primary/50 transition-all cursor-pointer group flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/3 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shadow-lg border border-white/5">
                  <Star size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[11px] font-black text-white uppercase tracking-wider group-hover:text-primary transition-colors">{garage.name}</h4>
                    {garage.fast && <span className="bg-primary/20 text-primary text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter border border-primary/30">PRIORITY</span>}
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-[9px] text-on-surface-variant font-black tracking-widest">
                    <div className="flex items-center gap-1 text-warning">
                      <Star size={10} fill="currentColor" />
                      {garage.rating}
                    </div>
                    <span className="opacity-30">|</span>
                    <span className="uppercase text-primary/70">{garage.dist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Info Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
            <Activity size={60} />
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 mb-4">LAST_NODE_SERVICE</p>
          <div className="flex items-end gap-2 font-mono">
            <span className="text-4xl font-extrabold tracking-tighter text-white">15,420</span>
            <span className="text-[10px] font-black text-primary mb-1 tracking-widest">KM</span>
          </div>
          <p className="text-[10px] font-black text-on-surface-variant mt-2 tracking-widest uppercase">ST_DATE: 12_OCT_2023</p>
        </div>
        
        <div className="md:col-span-2 relative h-full glass-panel rounded-2xl border border-white/5 overflow-hidden group p-6 flex flex-col justify-center">
          <img 
            src="https://images.unsplash.com/photo-1613214049841-02898276f903?w=800&h=400&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale brightness-50 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck size={20} className="text-primary text-glow" />
              <h4 className="text-xl font-black text-white tracking-[0.1em] uppercase italic">VERIFIED_FLEET_PROTOCOLS</h4>
            </div>
            <p className="text-[11px] text-on-surface-variant font-bold tracking-wide leading-relaxed max-w-xl uppercase">
              Every maintenance log packet is cryptographically hashed for system integrity. ENSURING_RESALE_VALUE_INDEX & REGULATORY_COMPLIANCE_ALPHA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
