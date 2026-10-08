import React from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  Network, 
  Cpu, 
  Radio, 
  Layers, 
  Eye, 
  CheckCircle2, 
  Flame,
  ArrowUpRight 
} from 'lucide-react';
import { handsOnLabs } from '../data/labs';

export const SecurityLabs = () => {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Terminal: Terminal,
    Network: Network,
    Cpu: Cpu,
    Radio: Radio,
    Layers: Layers,
    Eye: Eye
  };

  return (
    <section id="labs" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: SECURITY_LABS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Hands-on Labs & Practice
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            Controlled sandbox environments, capture the flag challenges, and practical forensic drills used to build applied defense intuition.
          </p>
        </div>

        {/* Clear Notice Banner - strictly conforming to requirement: Do not present these as work experience */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-left flex items-start gap-3">
          <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs font-mono text-slate-300">
            <span className="text-cyan-400 font-semibold uppercase">LAB DISCLOSURE & RIGOR:</span>{' '}
            These entries represent self-directed and structured lab simulations (VirtualBox networks, TryHackMe pathways, and LetsDefend SOC casework), strictly distinguished from production work experience.
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {handsOnLabs.map((lab) => {
            const IconComponent = iconMap[lab.icon] || Terminal;
            return (
              <div
                key={lab.id}
                className="rounded-xl bg-[#0d1322] border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all group shadow-sm hover:shadow-cyan-950/20"
              >
                <div className="space-y-4">
                  
                  {/* Top badges */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/60 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                      {lab.badge}
                    </span>
                  </div>

                  {/* Title & Platform */}
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      Platform: {lab.platform}
                    </span>
                    <h3 className="text-base font-semibold text-white font-sans group-hover:text-cyan-300 transition-colors">
                      {lab.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {lab.description}
                  </p>

                </div>

                {/* Skills tags */}
                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase">
                    Core Skills Practiced:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {lab.skillsFocused.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
