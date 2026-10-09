import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 py-12 text-left relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">

          {/* Identity */}
          <div className="space-y-1.5">
            <span className="font-mono text-base font-bold text-white tracking-wide block">
              {personalInfo.name}
            </span>
            <p className="text-xs font-mono text-cyan-400">
              Cybersecurity | SOC | Network Security
            </p>
            <p className="text-xs text-slate-400 font-sans max-w-md">
              Computer Engineering student building practical proof-of-work in SIEM monitoring, log forensics, and network defenses.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Puja Bhatt. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Proof-of-Work Portfolio • Far Western University, Nepal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
