import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/profile';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';

export const ResumeModal = ({ onClose }) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span id="resume-title" className="text-sm font-mono text-white font-semibold">
              Puja_Bhatt_Resume_SOC.pdf (Preview Mode)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <a
              href="/Puja_Bhatt_Resume.pdf"
              download="Puja_Bhatt_Cybersecurity_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body (A4 styled, clean, ATS formatted) */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-900 font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-5">
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-950">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-800 font-mono mt-0.5">
              Cybersecurity | SOC Operations | Network Security
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-900 hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-800 hover:underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-cyan-800 hover:underline">
                GitHub: Puja2059
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              Computer Engineering student at Far Western University, Nepal, actively building practical expertise in Security Operations (SOC), network protocol inspection, log forensics, and vulnerability assessment. Proven hands-on capability deploying SIEM telemetry in Wazuh, authoring custom XML detection rules for brute-force attacks, decoding raw socket traffic in Python, and investigating Linux authentication logs. Seeking an entry-level SOC Analyst or Cybersecurity Internship role.
            </p>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-slate-950">{personalInfo.institution}</h3>
                <p className="text-slate-700 italic">{personalInfo.degree}</p>
                <p className="text-xs text-slate-600 mt-0.5">Relevant Coursework: Computer Networks, Operating Systems, Computer Architecture, Data Structures & Algorithms, Object-Oriented Programming.</p>
              </div>
              <span className="font-mono text-xs text-slate-600 shrink-0">Kanchanpur, Nepal</span>
            </div>
          </section>

          {/* Practical Experience */}
          <section className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Practical Security Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="text-xs sm:text-sm mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-950">{exp.role}</h3>
                    <p className="text-slate-700 font-medium">{exp.organization} — {exp.location}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-600 shrink-0">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-800">
                  {exp.keyResponsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Key Security Projects */}
          <section className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Cybersecurity Projects & Labs
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-950">
                      {proj.title}
                    </h3>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-800 hover:underline shrink-0">
                      GitHub ↗
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 font-mono mb-1">
                    Tech: {proj.technologies.join(', ')}
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-800">
                    <li>{proj.problemObjective}</li>
                    <li>{proj.whatIImplemented[0]}</li>
                    <li>{proj.whatIImplemented[1]}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800">
              <div>
                <strong className="text-slate-950 font-mono">Security Operations:</strong> Wazuh SIEM, Windows Event Logs (ID 4624/4625), Linux auth.log, Alert Investigation, Incident Triage.
              </div>
              <div>
                <strong className="text-slate-950 font-mono">Network Security:</strong> TCP/IP, DNS, Wireshark, VLANs, 802.1Q Trunking, ACLs, Layer-2 Port Security, Packet Tracer.
              </div>
              <div>
                <strong className="text-slate-950 font-mono">Web & System Security:</strong> OWASP ZAP, SSL/TLS Ciphers, CSP, HSTS, Kali Linux, VirtualBox, Bash, Docker.
              </div>
              <div>
                <strong className="text-slate-950 font-mono">Programming & Tools:</strong> Python (Sockets, Scapy, Flask), C, C++, Java, Git, GitHub.
              </div>
            </div>
          </section>

          {/* Training */}
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Cybersecurity Training & Labs
            </h2>
            <p className="text-xs text-slate-800">
              <strong>TryHackMe:</strong> Security Principles, Intro to Logs, Writing Pentest Reports, DNS in Detail, Introductory Networking, Linux Fundamentals, Windows Fundamentals.
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>Target: Entry-level SOC Analyst & Internship Opportunities</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 cursor-pointer"
          >
            Close Viewer [Esc]
          </button>
        </div>

      </div>
    </div>
  );
};
