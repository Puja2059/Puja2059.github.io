import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/profile';

export const Resume = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: RESUME_&_DOSSIER
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Curriculum Vitae & Qualifications
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            A comprehensive, verified summary of academic coursework, practical lab environments, trainee experience, and technical proficiencies.
          </p>
        </div>

        {/* Main Resume Showcase Box */}
        <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left summary info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>OPEN FOR SOC ANALYST INTERNSHIPS</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                  {personalInfo.name}
                </h3>
                <p className="text-sm sm:text-base font-mono text-cyan-400 mt-1">
                  {personalInfo.degree} • {personalInfo.institution}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Location: {personalInfo.location} • Target: Entry-Level SOC / Cybersecurity Intern
                </p>
              </div>

              <p className="text-sm text-slate-300 font-sans leading-relaxed max-w-2xl">
                Ready to contribute to security operations with hands-on SIEM detection rule tuning, Windows/Linux log parsing, deep packet inspection, and disciplined incident investigation workflows.
              </p>

              {/* Core qualifications breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase">Education</div>
                  <div className="text-slate-100 font-medium mt-0.5">B. Computer Engineering</div>
                  <div className="text-[11px] text-cyan-400">Far Western University</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase">Practical Trainee</div>
                  <div className="text-slate-100 font-medium mt-0.5">Virtual SOC Analyst</div>
                  <div className="text-[11px] text-cyan-400">TechBiz Academy (2026)</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase">Primary Toolset</div>
                  <div className="text-slate-100 font-medium mt-0.5">Wazuh, Scapy, ZAP</div>
                  <div className="text-[11px] text-cyan-400">Wireshark, Packet Tracer</div>
                </div>
              </div>
            </div>

            {/* Right Action Callouts */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 bg-slate-950/80 p-6 rounded-xl border border-slate-800 text-center sm:text-left">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-1.5">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume Actions</span>
              </div>

              {/* View Resume Button */}
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              {/* Download Resume Button */}
              <a
                href="/Puja_Bhatt_Resume.pdf"
                download="Puja_Bhatt_Cybersecurity_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-medium bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-500/80 hover:text-cyan-300 hover:bg-slate-800 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="pt-2 text-[11px] font-mono text-slate-400 text-center">
                Strictly authentic proof-of-work • No fabricated credentials
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
