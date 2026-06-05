import { Search, Bell, HelpCircle, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center px-8 py-4 w-full bg-surface/40 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={14} />
          <input 
            type="text" 
            placeholder="SCAN SYSTEM DATABASE..."
            className="w-full bg-white/5 border border-white/10 rounded py-2.5 pl-10 pr-4 text-[10px] font-mono tracking-widest focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-on-surface-variant/40 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-right hidden lg:flex border-r border-white/5 pr-6">
          <div>
            <div className="text-[8px] text-slate-500 uppercase tracking-[0.2em] mb-1">Status</div>
            <div className="text-[10px] font-mono text-primary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              SECURE_LINK
            </div>
          </div>
          <div>
            <div className="text-[8px] text-slate-500 uppercase tracking-[0.2em] mb-1">Uptime</div>
            <div className="text-[10px] font-mono text-on-surface">14D 08H 12M</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-all relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
          </button>
          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
          <div className="flex items-center gap-3 pl-2 group cursor-pointer">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-bold text-white tracking-widest uppercase">ELIAS THORNE</p>
              <p className="text-[8px] text-on-surface-variant font-mono uppercase tracking-tighter">SECTOR_ALPHA</p>
            </div>
            <div className="w-9 h-9 rounded border border-white/10 p-0.5 overflow-hidden group-hover:border-primary/50 transition-all">
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <User size={16} className="text-on-surface-variant group-hover:text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
