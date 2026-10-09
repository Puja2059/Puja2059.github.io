import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Shield, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/profile';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto URL safely
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Cybersecurity Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open default mail client directly
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080c16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: COMMUNICATION_CHANNELS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Contact & Professional Inquiries
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            Currently open for SOC Analyst internships, entry-level cybersecurity positions, and defensive security collaboration.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/60 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Direct Email Address
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-cyan-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Preferred communication channel for opportunities and technical queries.
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-sky-500/60 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    LinkedIn Network
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    Puja Bhatt
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-slate-600 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    GitHub Profile & Repositories
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    github.com/Puja2059
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl bg-[#0d1322]/80 border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>LOCATION: {personalInfo.location}</span>
              </div>
              <div className="text-slate-400 text-[11px] pl-6 font-sans">
                Affiliated with Far Western University, Nepal. Available for remote internships or localized opportunities.
              </div>
            </div>

          </div>

          {/* Right Column: Transparent Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800 shadow-xl space-y-5">
              
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Submitting directly formats an email to bhattpuja2059@gmail.com without intermediary servers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Subject / Role Title
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. SOC Analyst Internship Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your inquiry or message here..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm resize-y"
                  ></textarea>
                </div>

                {/* Submit action */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-slate-400">
                    
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                    Your email client should have opened with the drafted message. Alternatively, write directly to <strong>{personalInfo.email}</strong>.
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
