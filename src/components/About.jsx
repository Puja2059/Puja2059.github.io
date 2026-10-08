import React from 'react';
import { 
  ShieldAlert, 
  Network, 
  Search, 
  Globe, 
  ArrowRight, 
  GraduationCap, 
  Compass, 
  Terminal, 
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/profile';

export const About = () => {
  const interestIcons = {
    ShieldAlert: ShieldAlert,
    Network: Network,
    Search: Search,
    Globe: Globe
  };

  return (
    <section id="about" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: ABOUT_ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Background & Defensive Focus
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            A grounded Computer Engineering perspective focused on telemetry, protocols, and hands-on defense.
          </p>
        </div>

        {/* Top Grid: Narrative & Discovery Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 text-left">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-[#0d1322] border border-slate-800 rounded-xl p-6 sm:p-7 space-y-4 shadow-lg">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Puja Bhatt</h3>
                  <p className="text-xs font-mono text-cyan-400">{personalInfo.degree}</p>
                  <p className="text-xs text-slate-400">{personalInfo.institution} • {personalInfo.location}</p>
                </div>
              </div>

              {personalInfo.aboutNarrative.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 mb-2">CAREER VECTOR:</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Computer Eng.</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-semibold">Security Operations (SOC)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">Network Security</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">AI Security</span>
                </div>
              </div>
            </div>

            {/* What Sparked My Interest */}
            <div className="bg-[#0d1322]/80 border border-slate-800/90 rounded-xl p-6">
              <h4 className="text-sm font-mono text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                How I Became Interested in Cybersecurity
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300 font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">01.</span>
                  <span><strong>How networks communicate:</strong> Dissecting raw frames and observing encapsulation in action.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">02.</span>
                  <span><strong>How attacks appear in logs:</strong> Connecting failed authentication traces and audit IDs to malicious behavior.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">03.</span>
                  <span><strong>How anomalies are detected:</strong> Writing threshold and timeframe-based SIEM rules in Wazuh.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">04.</span>
                  <span><strong>How events are investigated:</strong> Formulating an incident timeline from raw timestamps, IPs, and user UIDs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">05.</span>
                  <span><strong>How systems are hardened:</strong> Applying Layer-2 port security, VLAN segmentation, and HTTP security headers.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Strongest Current Interests (4 Pillars) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-lg font-semibold text-white font-sans flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400" />
                Core Security Focus Areas
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Primary areas where I am actively building hands-on labs and practical proof-of-work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.coreInterests.map((interest, idx) => {
                const IconComponent = interestIcons[interest.icon] || ShieldAlert;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-3 group-hover:border-cyan-500/60 group-hover:bg-cyan-950/40 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white font-sans mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {interest.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Targeted Opportunity Callout */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-[#0d1322] border border-cyan-800/40 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>PRIMARY CAREER TARGET</span>
              </div>
              <p className="text-sm text-slate-200 font-sans leading-relaxed">
                {personalInfo.primaryTarget}
              </p>
            </div>
          </div>

        </div>

        {/* Section: Cybersecurity Journey (Visual Timeline) */}
        <div className="mt-20 pt-16 border-t border-slate-800 text-left">
          <div className="mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-slate-900 text-cyan-400 border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>PROGRESSION MILESTONES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              My Cybersecurity Journey
            </h3>
            <p className="text-sm font-mono text-slate-400 max-w-2xl">
              From academic computer engineering foundations to dedicated security monitoring labs and future specialization.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {personalInfo.journeyTimeline.map((item) => {
              const isCompleted = item.status === 'completed';
              const isCurrent = item.status === 'current';
              const isFuture = item.status === 'future';

              return (
                <div key={item.step} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'bg-cyan-500 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                        : isCompleted
                        ? 'bg-slate-900 border-cyan-500/70 text-cyan-400'
                        : 'bg-slate-950 border-slate-700 text-slate-500'
                    }`}
                  >
                    {isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                    ) : isCompleted ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">STAGE {String(item.step).padStart(2, '0')}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs font-mono text-cyan-400/90">{item.institution}</span>
                      </div>
                      
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                          isCurrent
                            ? 'bg-cyan-950 text-cyan-300 border-cyan-700 font-semibold animate-pulse'
                            : isCompleted
                            ? 'bg-slate-900 text-slate-300 border-slate-800'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-white font-sans mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-300 font-sans leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
