import React from 'react';
import { 
  ShieldAlert, 
  Network, 
  Globe, 
  Terminal, 
  Code, 
  Wrench, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills = () => {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Network: Network,
    Globe: Globe,
    Terminal: Terminal,
    Code: Code,
    Wrench: Wrench
  };

  return (
    <section id="skills" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: TECHNICAL_CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Categorized Technical Skills
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            Structured into clear defensive domains—focused on verifiable tools, protocol knowledge, and operating capabilities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || ShieldAlert;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d1322] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed font-sans">
                    {category.description}
                  </p>

                  {/* Skills List with notes */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start justify-between gap-2 text-xs"
                      >
                        <div>
                          <div className="font-mono text-slate-200 font-medium">
                            {skill.name}
                          </div>
                          {skill.note && (
                            <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                              {skill.note}
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/40 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Domain verified</span>
                  <span className="text-emerald-400">● Practical Ready</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
