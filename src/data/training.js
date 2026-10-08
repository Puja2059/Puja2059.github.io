export const trainingModules = [
  {
    id: "thm-security-principles",
    title: "Security Principles",
    provider: "TryHackMe",
    category: "Security Fundamentals",
    topics: ["CIA Triad", "Privilege Management", "Defense in Depth", "Access Control Models"],
    description: "Core concepts of information security: confidentiality, integrity, availability, threat modeling, and defensive layered design."
  },
  {
    id: "thm-intro-to-logs",
    title: "Intro to Logs",
    provider: "TryHackMe",
    category: "Log Analysis & Monitoring",
    topics: ["Log Types", "Syslog Formats", "Windows Event Viewer", "Log Centralization"],
    description: "Understanding log structures, event generation across operating systems, log parsing, and the role of centralized logging in detection."
  },
  {
    id: "thm-pentest-reports",
    title: "Writing Pentest Reports",
    provider: "TryHackMe",
    category: "Reporting & Documentation",
    topics: ["Executive Summaries", "Risk Severity (CVSS)", "Technical Evidence", "Remediation Steps"],
    description: "Documenting security findings clearly for both executive and engineering audiences, with reproducible evidence and practical mitigations."
  },
  {
    id: "thm-dns-detail",
    title: "DNS in Detail",
    provider: "TryHackMe",
    category: "Network Protocols",
    topics: ["Recursive Resolution", "DNS Records (A, MX, TXT, CNAME)", "Zone Transfers", "DNS Security"],
    description: "In-depth mechanics of Domain Name System resolution, root hints, cache poisoning concepts, and inspecting DNS traffic."
  },
  {
    id: "thm-intro-networking",
    title: "Introductory Networking",
    provider: "TryHackMe",
    category: "Networking Fundamentals",
    topics: ["OSI 7-Layer Model", "IPv4 Subnetting", "TCP 3-Way Handshake", "Port Numbers"],
    description: "Foundational networking mechanics, port allocations, socket abstractions, and how transport layer protocols manage state."
  },
  {
    id: "thm-linux-fundamentals",
    title: "Linux Fundamentals",
    provider: "TryHackMe",
    category: "Operating Systems",
    topics: ["File Permissions", "Process Management", "Bash Utilities", "System Directories"],
    description: "Navigating the Linux CLI, controlling users and groups, managing background services, and manipulating files with text processing tools."
  },
  {
    id: "thm-windows-fundamentals",
    title: "Windows Fundamentals",
    provider: "TryHackMe",
    category: "Operating Systems",
    topics: ["File System (NTFS)", "Registry", "Services & Tasks", "User Account Control"],
    description: "Core Windows OS architecture, understanding security identifiers (SIDs), permissions, and key administrative utilities."
  }
];
