import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Terminal, 
  Shield, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Lock, 
  Cpu, 
  FileCode, 
  BookOpen,
  AlertCircle
} from 'lucide-react';
import { Github } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b101c] border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/20 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-7 py-4 bg-[#080d18] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h2 id="modal-title" className="text-base sm:text-lg font-bold text-white font-sans">
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-8 overflow-y-auto flex-1 font-sans">
          
          {/* 1. Overview & Objective */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>1. OVERVIEW & OBJECTIVE</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-mono block text-xs uppercase mb-1 text-slate-400">Problem / Core Objective:</strong>
              {project.problemObjective}
            </div>
          </div>

          {/* 2. Environment & Architecture Flow */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>2. ARCHITECTURE & INVESTIGATION FLOW</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300">
              <div className="text-slate-400 uppercase text-[11px] mb-1">Environment Setup:</div>
              <p className="text-slate-200 font-sans">{project.environmentArchitecture}</p>
            </div>

            {/* Step-by-Step Architecture Pipeline */}
            <div className="bg-[#090e1a] border border-slate-800/90 rounded-xl p-4 sm:p-5">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                <span>EXECUTION & DATA FLOW PIPELINE</span>
                <span className="text-cyan-400 text-[10px]">VERIFIED IN LAB</span>
              </div>
              <div className="space-y-3">
                {project.architectureFlow.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <div className="w-6 h-6 rounded bg-cyan-950 border border-cyan-800/80 text-cyan-400 font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-slate-100 font-semibold flex items-center gap-2">
                        <span>{item.step}</span>
                        {idx < project.architectureFlow.length - 1 && (
                          <span className="text-slate-600 font-normal">→</span>
                        )}
                      </div>
                      <div className="text-slate-400 font-sans text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. What I Implemented */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>3. TECHNICAL IMPLEMENTATION DETAILS</span>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {project.whatIImplemented.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Security Purpose & Relevance */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>4. SECURITY PURPOSE & DEFENSIVE RELEVANCE</span>
            </div>
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-sm text-slate-200 leading-relaxed flex items-start gap-3">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <div>
                <strong className="text-cyan-300 font-mono text-xs uppercase block mb-1">Why this matters for SOC & Network Defense:</strong>
                {project.securityRelevance}
              </div>
            </div>
          </div>

          {/* 5. Evidence / Example Lab Data */}
          {project.sampleLabData && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>5. EVIDENCE & TELEMETRY ARTIFACTS</span>
                </span>
                <span className="text-amber-400 text-[10px] bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  Example / Lab Data
                </span>
              </div>
              <div className="rounded-xl bg-[#070b14] border border-slate-800 overflow-hidden text-left font-mono">
                <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{project.sampleLabData.title}</span>
                  <span className="text-slate-400">LAB ARTIFACT</span>
                </div>
                <div className="p-4 text-xs text-cyan-300/90 overflow-x-auto leading-relaxed">
                  <pre className="whitespace-pre-wrap">{project.sampleLabData.code}</pre>
                </div>
              </div>
            </div>
          )}

          {/* 6. What I Learned */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>6. WHAT I LEARNED & TAKEAWAYS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.whatILearned.map((learning, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Technologies & GitHub */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800/80 text-cyan-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <Github className="w-4 h-4" />
                <span>View Repository: {project.githubLabel || 'GitHub'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3 bg-[#080d18] border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>Project Investigation Dossier</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 cursor-pointer"
          >
            Close [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
