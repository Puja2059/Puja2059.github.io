import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  ArrowRight, 
  Download, 
  Mail, 
  CheckCircle2, 
  Cpu, 
  Network, 
  Search, 
  AlertTriangle,
  Radio,
  Lock,
  Layers
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/profile';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('wazuh');

  const telemetryTabs = {
    wazuh: {
      name: 'Wazuh SIEM Rule',
      badge: 'Detection Rule XML',
      content: `<!-- Lab Telemetry: Wazuh Custom Rule (local_rules.xml) -->
<group name="windows,authentication_failures,">
  <rule id="100100" level="10" frequency="5" timeframe="60">
    <if_matched_sid>60122</if_matched_sid> <!-- Windows Event ID 4625 -->
    <same_source_ip />
    <description>Alert: Multiple Failed Windows Logins (Brute Force)</description>
    <mitre><id>T1110.001</id></mitre>
  </rule>
</group>
[EVENT] TargetUserName: Administrator | Source: 192.168.1.105
[STATUS] Rule 100100 fired -> Level 10 Incident Logged`
    },
    sniffer: {
      name: 'Packet Dissector',
      badge: 'Raw Socket Sniffer',
      content: `[+] Ethernet Frame Decoded:
    Source MAC: 00:0c:29:a1:33:04 -> Dest MAC: 00:0c:29:4f:8e:12
[+] IPv4 Header (20 bytes):
    Version: 4 | TTL: 64 | Protocol: 6 (TCP)
    192.168.1.105:54122 -> 192.168.1.1:80
[+] TCP Segment:
    Flags: [ SYN ] (0x002) | Seq: 104829104 | Window: 64240
    [ANALYSIS] Inbound connection attempt / SYN scan detected`
    },
    authlog: {
      name: 'Linux auth.log',
      badge: 'PAM Host Forensics',
      content: `[RAW /var/log/auth.log]
Sep 18 10:14:02 kali sshd[24810]: Failed password for invalid user admin
Sep 18 10:14:05 kali sshd[24814]: Failed password for invalid user admin
Sep 18 10:15:22 kali sudo: student : USER=root ; COMMAND=/bin/cat /etc/shadow
[FORENSIC CORRELATION]
Initial SSH authentication rejection followed by local privilege escalation.
Risk Level: Elevated | Subsystem: Linux PAM`
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden cyber-grid">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-2/3 right-10 w-96 h-96 bg-blue-950/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Identity & Objective */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 font-medium">SOC ASPIRANT & SECURITY LEARNER</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Far Western University, Nepal</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                PUJA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">BHATT</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-mono text-cyan-400/90 font-medium tracking-wide">
                Cybersecurity | SOC | Network Security
              </p>
            </div>

            {/* Supporting text - strictly accurate as requested */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              Computer Engineering student building practical experience in <span className="text-white font-medium">security monitoring</span>, <span className="text-white font-medium">network analysis</span>, <span className="text-white font-medium">log investigation</span>, and <span className="text-white font-medium">web security</span>.
            </p>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg flex items-center gap-2 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>SIEM & Wazuh</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg flex items-center gap-2 text-slate-300">
                <Network className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Packet Analysis</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg flex items-center gap-2 text-slate-300">
                <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Log Forensics</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg flex items-center gap-2 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Web Hardening</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Puja_Bhatt_Resume.pdf`}
                download="Puja_Bhatt_Cybersecurity_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono font-medium bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-500/70 hover:text-cyan-300 hover:bg-slate-800/80 transition-all cursor-pointer"
                title="Download Resume (PDF)"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono font-medium bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social / External Proof Links */}
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <span className="text-slate-400">Verified Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (Puja2059)</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: SOC Telemetry Console (Subtle, Real Lab Proof-of-Work) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-[#0d1322] border border-slate-800 shadow-2xl overflow-hidden text-left">
              
              {/* Header bar */}
              <div className="px-4 py-3 bg-[#080c16] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    soc-telemetry-console
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LAB DATA
                </div>
              </div>

              {/* Subheader / Mode clarification */}
              <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">MODE: HANDS-ON SECURITY LABS</span>
                <span className="text-cyan-400">PROOF-OF-WORK</span>
              </div>

              {/* Console Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/60 text-xs font-mono">
                {Object.entries(telemetryTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-2 px-3 text-center border-r border-slate-800/80 last:border-r-0 transition-colors cursor-pointer ${
                      activeTab === key
                        ? 'bg-slate-900/90 text-cyan-400 border-b-2 border-b-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Console Body */}
              <div className="p-4 bg-[#090e1a] font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[220px]">
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800/60 pb-1.5 mb-2.5">
                  <span>TELEMETRY ARTIFACT</span>
                  <span className="text-amber-400/90">[{telemetryTabs[activeTab].badge}]</span>
                </div>
                <pre className="text-cyan-300/90 whitespace-pre-wrap selection:bg-cyan-900">
                  {telemetryTabs[activeTab].content}
                </pre>
              </div>

              {/* Footer status notice */}
              <div className="px-4 py-2.5 bg-[#080c16] border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Controlled Lab Environment
                </span>
                <span className="text-slate-400">Example / Lab Data</span>
              </div>
            </div>

            {/* Quick telemetry metrics */}
            <div className="grid grid-cols-3 gap-2 mt-3 text-left">
              <div className="bg-slate-900/70 border border-slate-800/80 p-2.5 rounded-lg">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Focus</div>
                <div className="text-xs font-mono text-cyan-400 font-medium mt-0.5">SOC & Detection</div>
              </div>
              <div className="bg-slate-900/70 border border-slate-800/80 p-2.5 rounded-lg">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Hands-on Labs</div>
                <div className="text-xs font-mono text-white font-medium mt-0.5">Wazuh & Linux</div>
              </div>
              <div className="bg-slate-900/70 border border-slate-800/80 p-2.5 rounded-lg">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Network</div>
                <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">Packets & VLANs</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
