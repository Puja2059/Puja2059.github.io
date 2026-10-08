import React from 'react';
import { 
  BookOpen, 
  Terminal, 
  Network, 
  FileText, 
  Shield, 
  Layers, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { trainingModules } from '../data/training';

export const Training = () => {
  return (
    <section id="training" className="py-24 bg-[#080c16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: TRAINING_&_CURRICULUM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Cybersecurity Training & Labs
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            Structured hands-on rooms and theoretical defense modules completed on TryHackMe to consolidate core competencies.
          </p>
        </div>

        {/* Verification context banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left flex items-start gap-3">
          <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs font-mono text-slate-300">
            <span className="text-cyan-400 font-semibold uppercase">TRAINING METHODOLOGY:</span>{' '}
            These pathways establish foundational literacy in network protocol stacks, operating system internals, structured security log formats, and technical documentation. (Not represented as vendor certifications).
          </div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {trainingModules.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#0d1322] border border-slate-800 p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 uppercase">
                    {item.provider}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white font-sans">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Topics */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1.5">
                    Topics Mastered:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800/80"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Module Completed
                </span>
                <span className="text-slate-400">Self-Paced Lab</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
