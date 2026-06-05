import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    type: 'up' | 'down' | 'neutral';
  };
  icon: LucideIcon;
  progress?: number;
  highlight?: boolean;
}

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon: Icon, 
  progress,
  highlight = false
}: StatCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-xl border transition-all duration-500 relative overflow-hidden group backdrop-blur-md",
      highlight 
        ? "bg-primary/5 border-primary/30 cyan-glow shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]" 
        : "bg-white/5 border-white/10 hover:border-primary/40 hover:bg-white/10"
    )}>
      {highlight && (
        <div className="absolute right-[-20%] top-[-20%] text-primary opacity-5 group-hover:scale-110 transition-transform duration-1000">
          <Icon size={180} />
        </div>
      )}
      
      <div className="flex justify-between items-start relative z-10">
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em]",
          highlight ? "text-primary" : "text-slate-500"
        )}>
          {title}
        </p>
        <div className={cn(
          "p-2 rounded border transition-colors",
          highlight ? "bg-primary/10 border-primary/30 text-primary" : "bg-white/5 border-white/10 text-slate-400"
        )}>
          <Icon size={16} />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-3 relative z-10">
        <h3 className={cn(
          "text-3xl font-mono tracking-tighter font-bold",
          highlight && "text-glow"
        )}>{value}</h3>
        {trend && (
          <div className={cn(
            "flex items-center text-[10px] font-mono px-2 py-0.5 rounded",
            trend.type === 'up' && "text-success",
            trend.type === 'down' && "text-error",
            trend.type === 'neutral' && "text-slate-500",
          )}>
            {trend.value}
          </div>
        )}
      </div>

      <div className="mt-3 relative z-10">
        {subtitle && (
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
            {subtitle}
          </p>
        )}
        
        {progress !== undefined && (
          <div className="mt-4">
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className={cn(
                  "h-full rounded-full transition-all duration-1000",
                  progress > 80 ? "bg-primary" : progress > 50 ? "bg-warning" : "bg-error",
                  highlight && "shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
