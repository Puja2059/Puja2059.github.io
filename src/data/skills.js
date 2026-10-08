export const skillCategories = [
  {
    name: "Security Operations (SOC)",
    description: "Defensive telemetry, SIEM engineering, log inspection, and alert investigation workflows.",
    icon: "ShieldAlert",
    skills: [
      { name: "Wazuh", level: "Hands-on Lab", note: "Manager, Agent, XML Rule Customization" },
      { name: "SIEM Monitoring", level: "Practical", note: "Event collection, normalization & alerting" },
      { name: "Log Analysis", level: "Hands-on", note: "Windows Event Logs & Linux auth.log" },
      { name: "Alert Investigation", level: "Practical", note: "Triage, scope determination, IOC extraction" },
      { name: "Incident Response", level: "Foundational", note: "Triage steps, timeline building & reporting" }
    ]
  },
  {
    name: "Network Security",
    description: "Protocol dissection, switched security architecture, and packet analysis.",
    icon: "Network",
    skills: [
      { name: "TCP/IP & OSI Model", level: "Strong Foundation", note: "Handshakes, flags, subnetting, bitfields" },
      { name: "DNS Analysis", level: "Working Knowledge", note: "Query inspection, record types, DNS traffic" },
      { name: "VLANs & 802.1Q", level: "Configured in Labs", note: "Layer-2 isolation & trunking" },
      { name: "ACLs", level: "Configured in Labs", note: "Standard & Extended access control lists" },
      { name: "Port Security", level: "Configured in Labs", note: "Sticky MAC learning, maximums, shutdown mode" },
      { name: "Wireshark", level: "Hands-on", note: "Packet filtering, stream following, protocol decode" },
      { name: "Cisco Packet Tracer", level: "Hands-on", note: "Enterprise topology design & security testing" }
    ]
  },
  {
    name: "Web Security",
    description: "Vulnerability assessment, security header verification, and automated scanning.",
    icon: "Globe",
    skills: [
      { name: "OWASP ZAP", level: "Hands-on & API", note: "Automated active/passive scanning" },
      { name: "SSL/TLS", level: "Practical", note: "Cipher validation, certificates, handshakes" },
      { name: "CSP & HSTS", level: "Working Knowledge", note: "HTTP response header hardening" },
      { name: "Vulnerability Assessment", level: "Hands-on", note: "NitiShield AI platform development" }
    ]
  },
  {
    name: "Systems & Environments",
    description: "Operating systems, virtualization, and administrative scripting.",
    icon: "Terminal",
    skills: [
      { name: "Kali Linux", level: "Primary OS Lab", note: "Security tools, system diagnostics, permissions" },
      { name: "Windows 10 / Server", level: "Telemetry & Logs", note: "Event Viewer, Security Auditing, Registry" },
      { name: "VirtualBox", level: "Lab Virtualization", note: "Isolated host-only networks, snapshot management" },
      { name: "Docker", level: "Working Knowledge", note: "Containerized environments & service staging" },
      { name: "Bash Scripting", level: "Hands-on", note: "Regex filtering, log automation, text parsing" }
    ]
  },
  {
    name: "Programming & Scripting",
    description: "Developing custom security utilities, parsing scripts, and web platforms.",
    icon: "Code",
    skills: [
      { name: "Python", level: "Proficient", note: "Raw sockets, Scapy, automation, Flask/Streamlit" },
      { name: "Flask", level: "Practical", note: "Web API development & scanner orchestrator" },
      { name: "Streamlit", level: "Practical", note: "Security dashboards & data presentation" },
      { name: "C / C++", level: "Academic Core", note: "Low-level memory model, systems programming" },
      { name: "Java", level: "Academic Core", note: "Object-oriented software development" }
    ]
  },
  {
    name: "Security & Dev Tools",
    description: "Essential engineering and investigative toolset.",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Active Daily Use", note: "Version control, repository management" },
      { name: "Wazuh SIEM", level: "Lab Tested", note: "Dashboard & rule management" },
      { name: "Wireshark", level: "Frequent Use", note: "PCAP inspection" },
      { name: "Cisco Packet Tracer", level: "Frequent Use", note: "Switched/routed simulation" }
    ]
  }
];
