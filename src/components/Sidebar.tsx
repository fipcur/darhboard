import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Wrench, 
  BarChart3, 
  Settings, 
  Car, 
  PlusCircle,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Tab } from '../types';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 glass-panel border-r border-white/5 shadow-2xl fixed left-0 top-0 z-40">
      <div className="p-8 flex items-center gap-4">
        <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded flex items-center justify-center text-primary shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Car size={20} fill="currentColor" fillOpacity={0.2} />
        </div>
        <div>
          <h1 className="text-xs font-bold tracking-[0.2em] text-primary uppercase leading-tight">V-DRIVE OS</h1>
          <p className="text-[10px] text-on-surface-variant font-mono uppercase tracking-tighter">System v2.4.8</p>
        </div>
      </div>

      <nav className="flex-1 mt-4 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded transition-all duration-300 group text-[11px] font-bold uppercase tracking-widest",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20 cyan-glow" 
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              )}
            >
              <Icon size={16} className={cn(isActive && "text-primary")} />
              <span>{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="ml-auto w-1 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6 mt-auto border-t border-white/5 space-y-6">
        <button className="w-full flex items-center justify-center gap-2 bg-primary/10 border border-primary/40 text-primary py-3 rounded font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-primary/20 active:scale-95 shadow-lg shadow-primary/5">
          <PlusCircle size={14} />
          <span>INITIALIZE</span>
        </button>

        <div className="flex items-center gap-3 p-3 rounded bg-white/3 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-8 h-8 rounded bg-primary/10 p-0.5 border border-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="User" 
              className="w-full h-full rounded sm object-cover opacity-80"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-white uppercase tracking-wider truncate">MARCUS_THORNE</p>
            <p className="text-[8px] text-on-surface-variant font-mono uppercase tracking-tighter">ROOT_ADMIN</p>
          </div>
          <LogOut size={12} className="text-on-surface-variant hover:text-error transition-colors" />
        </div>
      </div>
    </aside>
  );
}
