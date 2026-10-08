export const handsOnLabs = [
  {
    id: "lab-wazuh",
    title: "Wazuh SIEM Detection & Telemetry",
    platform: "Self-Hosted Virtual Lab",
    badge: "SIEM & Host Telemetry",
    description:
      "Deployed Wazuh manager on Linux and monitored Windows endpoints. Authored custom XML rules for brute-force logon attempts and triaged alerts in the management console.",
    skillsFocused: ["SIEM Deployment", "XML Rule Writing", "Event ID 4625 Correlation", "Alert Triage"],
    category: "Security Operations",
    icon: "ShieldAlert"
  },
  {
    id: "lab-linux-logs",
    title: "Linux Authentication & Log Analysis",
    platform: "Kali Linux / Ubuntu Lab",
    badge: "Host Forensics",
    description:
      "Investigated /var/log/auth.log and journald entries. Parsed PAM subsystem messages, tracked elevated UID transitions via sudo, and built forensic incident timelines using Bash and grep.",
    skillsFocused: ["auth.log Parsing", "PAM Subsystem", "Sudo Forensics", "Timeline Reconstruction"],
    category: "Log Analysis",
    icon: "Terminal"
  },
  {
    id: "lab-wireshark",
    title: "Wireshark Network Traffic Analysis",
    platform: "PCAP Analysis & Lab Traces",
    badge: "Packet Dissection",
    description:
      "Captured and analyzed network packet traces. Inspected TCP three-way handshakes, identified anomalous port scans (SYN/FIN), extracted DNS query anomalies, and tracked cleartext protocol transmissions.",
    skillsFocused: ["Packet Dissection", "TCP Flags", "DNS Telemetry", "Traffic Filtering Syntax"],
    category: "Network Security",
    icon: "Network"
  },
  {
    id: "lab-network-traffic",
    title: "Network Traffic & Protocol Analysis",
    platform: "Custom Sniffer & Lab Network",
    badge: "Protocol Fundamentals",
    description:
      "Investigated raw IPv4, TCP, UDP, and ICMP frame headers. Evaluated how protocol headers carry network telemetry and analyzed socket communication patterns.",
    skillsFocused: ["Raw Sockets", "Protocol Headers", "IP Bitfields", "Traffic Flow Inspection"],
    category: "Network Security",
    icon: "Cpu"
  },
  {
    id: "lab-cisco",
    title: "Cisco Packet Tracer Network Hardening",
    platform: "Cisco Packet Tracer",
    badge: "Switching & Access Control",
    description:
      "Segmented multi-switch enterprise environments using VLANs and 802.1Q trunks. Hardened switch access ports with MAC port security and applied extended ACLs to prevent lateral movement.",
    skillsFocused: ["VLAN Segmentation", "Port Security", "ACL Filtering", "Router-on-a-Stick"],
    category: "Network Defense",
    icon: "Radio"
  },
  {
    id: "lab-thm",
    title: "TryHackMe Defense & Fundamentals Labs",
    platform: "TryHackMe",
    badge: "Structured Training",
    description:
      "Hands-on exercises completing foundational defensive pathways covering security principles, network protocols, log fundamentals, Linux command-line, and Windows telemetry.",
    skillsFocused: ["Security Fundamentals", "Log Concepts", "Linux & Windows CLI", "Report Writing"],
    category: "Hands-on Practice",
    icon: "Layers"
  },
  {
    id: "lab-letsdefend",
    title: "LetsDefend Blue Team Exercises",
    platform: "LetsDefend",
    badge: "SOC Simulation",
    description:
      "Investigated simulated SOC alerts covering suspicious endpoint activity, malicious email attachments, and web attack signatures. Practiced alert closing and playbook-guided analysis.",
    skillsFocused: ["Alert Investigation", "Playbook Execution", "SOC Case Management", "Triage Methodology"],
    category: "SOC Practice",
    icon: "Eye"
  }
];
