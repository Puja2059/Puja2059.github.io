import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/profile';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'labs', 'experience', 'skills', 'training', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Security Labs', href: '#labs', id: 'labs' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Training', href: '#training', id: 'training' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
        ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/40 py-3'
        : 'bg-[#090d16]/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg py-1"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base text-cyan-400 font-semibold tracking-wider group-hover:text-cyan-300 transition-colors">
                  Puja Bhatt
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  SOC ASPIRANT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">Security Operations & Network Security</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md text-xs font-mono tracking-wide transition-colors ${activeSection === link.id
                  ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 font-medium'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={`${import.meta.env.BASE_URL}Puja_Bhatt_Resume.pdf`}
              download="Puja_Bhatt_Cybersecurity_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300 hover:bg-slate-800 transition-all cursor-pointer"
              title="Download Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume (PDF)</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`${import.meta.env.BASE_URL}Puja_Bhatt_Resume.pdf`}
              download="Puja_Bhatt_Cybersecurity_Resume.pdf"
              className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-cyan-400 border border-slate-700 hover:bg-slate-800"
              title="Download Resume (PDF)"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0b101c]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-2 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-800/80 mb-2">
            <span>Navigation Menu</span>
            <span className="text-emerald-400">● Telemetry Ready</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-mono tracking-wide ${activeSection === link.id
                ? 'text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href={`${import.meta.env.BASE_URL}Puja_Bhatt_Resume.pdf`}
              download="Puja_Bhatt_Cybersecurity_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-md text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 hover:bg-cyan-900/60 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between px-2">
            <span className="text-xs text-slate-400 font-mono">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-cyan-400"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
