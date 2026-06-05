import { 
  User, 
  Palette, 
  Settings as SettingsIcon, 
  Bell, 
  MapPin, 
  CreditCard, 
  Code2, 
  Check,
  Edit2,
  Globe,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useState } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');
  const [fuel, setFuel] = useState('Unleaded');
  const [units, setUnits] = useState<'KM' | 'Miles'>('KM');

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
          <SettingsIcon size={12} />
          System_Configuration
        </div>
        <h2 className="text-4xl font-black tracking-tight text-white uppercase italic">Account Settings</h2>
        <p className="text-on-surface-variant font-bold tracking-tight max-w-xl">Manage your fleet account and system preferences for enhanced operational integrity.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile & Appearance Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Section */}
          <section className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000 grayscale">
              <User size={120} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="relative group/avatar">
                <div className="w-32 h-32 rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden relative">
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover/avatar:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
                <button className="absolute -bottom-3 -right-3 bg-primary text-on-primary p-3 rounded-lg shadow-xl hover:scale-110 transition-transform cyan-glow">
                  <Edit2 size={16} />
                </button>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic">Marcus_Chen</h3>
                <p className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mt-2 text-glow">Fleet_Director • ID: VD-9902</p>
                <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
                   <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                      <p className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest leading-none mb-1">Access_Level</p>
                      <p className="text-[10px] font-bold text-white uppercase tracking-tighter leading-none">ADMIN_X_PROTO</p>
                   </div>
                   <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                      <p className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest leading-none mb-1">System_Status</p>
                      <p className="text-[10px] font-bold text-success uppercase tracking-tighter leading-none">ONLINE_STABLE</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-white/2 p-6 rounded-xl border border-white/5">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Personnel_Alias</label>
                <input 
                  type="text" 
                  defaultValue="Marcus Chen"
                  className="w-full bg-white/3 border-b border-white/10 py-3 px-4 rounded-t-lg outline-none focus:border-primary transition-all font-bold text-sm text-white uppercase tracking-wider"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Secure_Email_Node</label>
                <input 
                  type="email" 
                  defaultValue="marcus.chen@v-drivepro.com"
                  className="w-full bg-white/3 border-b border-white/10 py-3 px-4 rounded-t-lg outline-none focus:border-primary transition-all font-bold text-sm text-white tracking-tight"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Operation_Protocol</label>
                <select className="w-full bg-white/3 border-b border-white/10 py-3 px-4 rounded-t-lg outline-none focus:border-primary transition-all font-bold text-sm text-white appearance-none uppercase tracking-widest">
                  <option className="bg-surface">Fleet Director</option>
                  <option className="bg-surface">Maintenance Manager</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 ml-1">Temporal_Zone</label>
                <select className="w-full bg-white/3 border-b border-white/10 py-3 px-4 rounded-t-lg outline-none focus:border-primary transition-all font-bold text-sm text-white appearance-none uppercase tracking-widest">
                  <option className="bg-surface">Bangkok (GMT+7)</option>
                  <option className="bg-surface">Singapore (GMT+8)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
               <div className="absolute -bottom-8 -left-8 opacity-5 group-hover:scale-110 transition-transform">
                <Monitor size={100} />
              </div>
              <h4 className="text-lg font-black mb-10 flex items-center gap-4 uppercase italic tracking-wider">
                <div className="w-1 h-5 bg-primary"></div>
                System_Metrics
              </h4>
              <div className="space-y-10 relative z-10">
                <div className="flex items-center justify-between bg-white/2 p-4 rounded-xl border border-white/5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Measurement Units</p>
                    <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-tighter mt-1">GLOBAL_METRIC_STD</p>
                  </div>
                  <div className="flex p-1 bg-white/5 rounded-lg border border-white/10">
                    {(['KM', 'Miles'] as const).map((u) => (
                      <button
                        key={u}
                        onClick={() => setUnits(u)}
                        className={cn(
                          "px-4 py-1.5 text-[10px] font-black rounded transition-all uppercase tracking-widest",
                          units === u ? "bg-primary text-on-primary shadow-lg cyan-glow" : "text-on-surface-variant hover:text-white"
                        )}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70">Resource_Fuel_Type</p>
                  <div className="flex flex-wrap gap-2">
                    {['Unleaded', 'Diesel', 'Electric', 'Hybrid'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFuel(f)}
                        className={cn(
                          "px-5 py-2.5 rounded border text-[10px] font-black transition-all uppercase tracking-widest",
                          fuel === f ? "bg-primary/20 text-primary border-primary/40 shadow-lg" : "bg-white/2 border-white/5 text-on-surface-variant hover:border-white/20 whitespace-nowrap"
                        )}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
               <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:scale-110 transition-transform">
                <Bell size={100} />
              </div>
              <h4 className="text-lg font-black mb-10 flex items-center gap-4 uppercase italic tracking-wider">
                <div className="w-1 h-5 bg-primary"></div>
                Alert_Matrices
              </h4>
              <div className="space-y-4 relative z-10">
                {[
                  { label: 'Service Reminders', desc: 'ALERT_X_MAINTENANCE_LOGS' },
                  { label: 'Weekly Reports', desc: 'CRITICAL_FLEET_SYNC' },
                ].map((notif) => (
                  <div key={notif.label} className="flex items-center justify-between p-5 bg-white/2 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <div>
                      <p className="text-[11px] font-black tracking-wider text-white uppercase italic">{notif.label}</p>
                      <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-widest mt-1 opacity-60">{notif.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer border border-primary/20">
                        <div className="absolute right-1 top-1 w-2.5 h-2.5 bg-primary rounded-full cyan-glow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Appearance & Integrations */}
        <div className="space-y-8">
          <section className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
             <div className="absolute -top-12 -right-12 opacity-5 translate-x-1/2 -translate-y-1/2">
               <Palette size={200} />
             </div>
            <h4 className="text-lg font-black mb-10 flex items-center gap-4 uppercase italic tracking-wider relative z-10">
              <div className="w-1 h-5 bg-primary"></div>
              Visual_Style_Node
            </h4>
            
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70">Interface_Shell_Theme</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'light', icon: Sun, label: 'LIGHT' },
                    { id: 'dark', icon: Moon, label: 'DARK' },
                    { id: 'system', icon: Monitor, label: 'PROTO' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id as any)}
                      className={cn(
                        "flex flex-col items-center p-4 rounded-xl border-2 transition-all group",
                        theme === t.id ? "bg-primary/10 border-primary shadow-lg cyan-glow" : "bg-white/2 border-white/5"
                      )}
                    >
                      <t.icon size={18} className={cn("mb-2", theme === t.id ? "text-primary" : "text-on-surface-variant")} />
                      <span className={cn("text-[9px] font-black tracking-[0.2em] uppercase leading-none", theme === t.id ? "text-primary" : "text-on-surface-variant")}>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70">System_Language_Map</p>
                <div className="relative group">
                  <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary" />
                  <select className="w-full bg-white/3 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-[11px] font-black appearance-none focus:ring-1 focus:ring-primary uppercase tracking-widest text-white">
                    <option className="bg-surface">ENGLISH_[US_X_ALPHA]</option>
                    <option className="bg-surface">SPANISH_[ES_NODAL]</option>
                    <option className="bg-surface">GERMAN_[DE_STATIC]</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Bento Card */}
          <section className="space-y-6">
             <h4 className="text-[10px] font-bold flex items-center gap-3 uppercase tracking-[0.4em] text-on-surface-variant">
              SYNC_MODULES
            </h4>

            {[
              { label: 'GPS_TRACKER_X', desc: 'REAL_TIME_NODE_LOCATIONS', status: 'connected', icon: MapPin },
              { label: 'FUEL_COST_INTEGRITY', desc: 'IMPORT_RESOURCE_FLOW', status: 'pending', icon: CreditCard },
              { label: 'FDR_CONTROL_API', desc: 'CUSTOM_SYSTEM_SINK', status: 'open', icon: Code2 },
            ].map((item) => (
              <div key={item.label} className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/3 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                    <item.icon size={26} />
                  </div>
                  {item.status === 'connected' && (
                    <span className="bg-success/20 text-success text-[8px] font-black px-2 py-0.5 rounded border border-success/30 shadow-lg shadow-success/20 uppercase tracking-widest">ACTIVE</span>
                  )}
                  {item.status === 'pending' && (
                    <span className="bg-warning/20 text-warning text-[8px] font-black px-2 py-0.5 rounded border border-warning/30 shadow-lg shadow-warning/20 uppercase tracking-widest">ERROR_X</span>
                  )}
                </div>
                <div>
                  <h5 className="font-black text-[12px] tracking-wider text-white uppercase italic">{item.label}</h5>
                  <p className="text-[9px] text-on-surface-variant font-bold mt-1 uppercase tracking-widest opacity-60">{item.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* Bottom Save Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 pb-10">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-[0.3em]">
            SYSTEM_UP_LOADED: OCT_24_2023_0942_AM
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 text-[10px] font-black text-on-surface-variant hover:text-white transition-all uppercase tracking-widest">
            TERMINATE_EDITS
          </button>
          <button className="px-10 py-3.5 bg-primary text-on-primary rounded-xl font-black text-[11px] uppercase tracking-[0.4em] shadow-xl shadow-primary/20 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all cyan-glow mx-auto">
            COMMIT_CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}
