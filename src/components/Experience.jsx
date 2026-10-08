import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Shield, 
  Terminal, 
  FileText,
  AlertCircle 
} from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#080c16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: EXPERIENCE_&_TRAINING_ROLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Practical Security Experience
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            Structured trainee programs and defensive security monitoring roles preparing for operational SOC environments.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8 text-left max-w-4xl">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-[#0d1322] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              {/* Header info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
                      {exp.type}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-slate-300 mt-1 font-medium">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {exp.summary}
              </p>

              {/* Key Responsibilities */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  Key Responsibilities & Operational Workflows
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                  {exp.keyResponsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Utilized */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-2">Competencies:</span>
                  {exp.skillsUtilized.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-slate-400 italic">
                  * {exp.clarificationNote}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
