export const projects = [
  {
    id: "wazuh-soc-lab",
    title: "Wazuh SOC Monitoring & Windows Detection Lab",
    shortDescription:
      "Engineered a two-node virtual SOC environment pairing Wazuh manager on Kali Linux with a Windows 10 endpoint, authoring custom detection rules to catch authentication brute-force activity.",
    category: "Security Operations & SIEM",
    status: "Completed Lab",
    github: "https://github.com/Puja2059",
    githubLabel: "Puja2059 (Profile / Security Labs)",
    technologies: ["Wazuh", "Kali Linux", "Windows 10", "VirtualBox", "Windows Security Events", "XML Rules"],

    problemObjective:
      "Deploy a functional home SIEM lab environment to understand how endpoint telemetry is collected, transferred, parsed, and alerted upon during unauthorized authentication attempts. The primary objective was to observe Windows Event ID 4625 (failed login) generation in real time, build custom Wazuh detection logic, and investigate alerts in the SOC dashboard.",

    environmentArchitecture:
      "Two virtual machines deployed on an isolated VirtualBox internal network: (1) Kali Linux hosting Wazuh Manager, Filebeat, and Wazuh Indexer/Dashboard; (2) Windows 10 endpoint running Wazuh Agent with active Security Event Channel telemetry streaming to the manager.",

    architectureFlow: [
      { step: "Windows Endpoint", detail: "Target workstation generating security telemetry" },
      { step: "Windows Security Events", detail: "Event ID 4625 (failed logon) logged in Security channel" },
      { step: "Wazuh Agent", detail: "Lightweight agent collects and forwards logs securely over port 1514" },
      { step: "Wazuh Manager", detail: "Decodes log fields and evaluates rule engine against ruleset" },
      { step: "Detection Rule", detail: "Custom XML rule triggers on frequency > threshold within timeframe" },
      { step: "Alert", detail: "Severity-elevated alert generated and indexed in dashboard" },
      { step: "Investigation", detail: "SOC triage of affected account, source workstation, and timestamp sequence" }
    ],

    whatIImplemented: [
      "Configured Wazuh Manager and established agent communication over encrypted channel.",
      "Configured the Windows agent ossec.conf to ingest the Microsoft-Windows-Security-Auditing event channel.",
      "Simulated iterative authentication failures against local accounts to generate telemetry.",
      "Analyzed Windows Security Event ID 4625 fields (LogonType, FailureReason, TargetUserName, WorkstationName).",
      "Authored a custom Wazuh XML detection rule to correlate multiple failed logons occurring within a 60-second window.",
      "Configured alert escalation and verified that single failures remained low-priority while burst failures triggered Level 10 alerts.",
      "Conducted post-alert analysis within the Wazuh dashboard to document attack timeline and source evidence."
    ],

    securityRelevance:
      "Authentication attacks such as password spraying and brute-forcing are among the most common initial access vectors in enterprise environments. Understanding how SIEM agents collect endpoint events and how rule thresholds differentiate accidental user typos from automated attacks is fundamental for SOC triage.",

    sampleLabData: {
      title: "Example / Lab Data: Custom Wazuh Detection Rule & Event Telemetry",
      type: "xml-log",
      code: `<!-- Custom Wazuh Rule for High-Frequency Failed Logins (local_rules.xml) -->
<group name="windows,authentication_failures,">
  <rule id="100100" level="10" frequency="5" timeframe="60">
    <if_matched_sid>60122</if_matched_sid> <!-- Base Windows Event ID 4625 rule -->
    <same_source_ip />
    <description>SOC Alert: Multiple Failed Windows Logins (Possible Brute-Force)</description>
    <mitre>
      <id>T1110.001</id>
    </mitre>
  </rule>
</group>

[LAB EVENT SAMPLE - Windows Event ID 4625]
TimeCreated : 2026-09-12 14:22:08
TargetUserName: Administrator
WorkstationName: WIN10-VICTIM
LogonType: 2 (Interactive)
Status: 0xC000006D (STATUS_LOGON_FAILURE)
SubStatus: 0xC000006A (STATUS_WRONG_PASSWORD)
Rule Match: Rule 100100 fired (Level 10) -> Alert sent to Wazuh Dashboard`
    },

    whatILearned: [
      "SIEM Concepts: How centralized log ingestion, normalization, and decoders work under the hood.",
      "Security Event Collection: The importance of configuring proper audit policies on Windows endpoints.",
      "Authentication Monitoring: Reading and understanding Windows Event ID 4624 (success) vs 4625 (failure) logon types.",
      "Detection Rules: Writing and tuning XML-based SIEM rules using frequency, timeframe, and grouping parameters.",
      "Alert Investigation: Methodically reviewing alerts to extract targeted accounts, hostnames, and time boundaries.",
      "SOC Workflow: Experiencing the complete operational loop from telemetry generation to alert triaging."
    ]
  },

  {
    id: "nitishield-ai",
    title: "NitiShield AI – Web Vulnerability Assessment Platform",
    shortDescription:
      "Engineered an automated web security platform performing SSL/TLS cipher audits, HTTP security header verification, and OWASP ZAP API integration with Celery asynchronous task queues.",
    category: "Web Security & Vulnerability Assessment",
    status: "Completed Project",
    github: "https://github.com/Puja2059/Major_PartA",
    githubLabel: "Puja2059/Major_PartA",
    technologies: ["Python", "Flask", "Streamlit", "OWASP ZAP", "Celery", "Redis", "Sqlite3", "ChromaDB"],

    problemObjective:
      "Web applications frequently suffer from misconfigured security headers, legacy SSL/TLS ciphers, and unpatched web vulnerabilities. The objective was to build an automated assessment platform that orchestrates multiple audit routines without blocking user requests, normalizes findings, and maps them to actionable remediation guidance.",

    environmentArchitecture:
      "Modular Python architecture featuring a Flask/Streamlit interface, asynchronous Celery task workers backed by Redis, OWASP ZAP automated scanner daemon, MySQL database for scan persistence, and ChromaDB/BM25 for security knowledge retrieval.",

    architectureFlow: [
      { step: "Web Application Target", detail: "Target URL submitted for defensive security audit" },
      { step: "Security Scanner Engine", detail: "Coordinates scanner workflows and worker tasks" },
      { step: "Python / SSL / HTTP Checks", detail: "Direct socket handshakes for TLS protocols, cipher suites & headers" },
      { step: "OWASP ZAP Integration", detail: "Automated active/passive vulnerability scanning via REST API" },
      { step: "Celery + Redis", detail: "Distributed queue managing long-running security scan jobs" },
      { step: "Finding Processing", detail: "Deduplication, severity categorization, and normalization" },
      { step: "ChromaDB / BM25", detail: "Retrieval of remediation documentation and security standards" },
      { step: "Security / Compliance Report", detail: "Generated structured report outlining findings and fixes" }
    ],

    whatIImplemented: [
      "Built custom Python socket and SSL inspection routines to evaluate TLS versions (TLS 1.2, 1.3) and deprecated ciphers.",
      "Implemented HTTP response header validation (Content-Security-Policy, Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options).",
      "Integrated OWASP ZAP via its Python API client for passive and active web vulnerability scanning.",
      "Decoupled scan execution from web interface using Celery workers backed by a Redis message broker.",
      "Normalized raw scan findings into standardized JSON structures with CVSS-aligned severity ratings.",
      "Integrated ChromaDB vector store and BM25 search to retrieve context-aware security remediation guidance.",
      "Mapped detected weaknesses to compliance baselines (OWASP Top 10 web vulnerabilities).",
      "Generated structured markdown and HTML vulnerability assessment reports."
    ],

    securityRelevance:
      "Vulnerability assessment is a foundational practice in proactive cybersecurity. Understanding how automated scanners interact with web servers, how headers mitigate browser-side attacks (such as clickjacking and MIME-sniffing), and how to properly document findings helps bridge the gap between discovery and remediation.",

    sampleLabData: {
      title: "Example / Lab Data: Scanner Audit Telemetry & Header Evaluation",
      type: "json-log",
      code: `[NitiShield-AI Audit Engine Output - Target: testphp.vulnweb.com]
{
  "scan_id": "NS-2026-0814",
  "tls_audit": {
    "protocol_negotiated": "TLSv1.3",
    "certificate_valid": true,
    "deprecated_protocols_detected": false
  },
  "security_headers": {
    "Strict-Transport-Security": {"present": false, "severity": "MEDIUM", "issue": "Missing HSTS"},
    "Content-Security-Policy": {"present": false, "severity": "HIGH", "issue": "Missing CSP"},
    "X-Frame-Options": {"present": true, "value": "SAMEORIGIN", "status": "SECURE"},
    "X-Content-Type-Options": {"present": false, "severity": "LOW", "issue": "Missing nosniff"}
  },
  "owasp_zap_status": "COMPLETED",
  "findings_count": { "High": 1, "Medium": 2, "Low": 3, "Info": 4 },
  "compliance_mapping": ["OWASP-A05:2021-Security Misconfiguration"]
}`
    },

    whatILearned: [
      "Vulnerability Assessment Workflows: Orchestrating scans systematically without causing denial of service.",
      "SSL/TLS Security: Understanding handshake negotiation, certificate validation, and cipher strength.",
      "HTTP Header Defenses: Why CSP, HSTS, and X-Frame-Options are vital first lines of defense.",
      "Asynchronous Task Architecture: Handling heavy security scans concurrently with Celery and Redis.",
      "OWASP ZAP Tooling: Automating spidering, passive rules, and active scans programmatically.",
      "Knowledge Retrieval: Indexing security remediation documents with vector and keyword search."
    ]
  },

  {
    id: "linux-log-forensics",
    title: "Linux Security Telemetry & Log Forensics Lab",
    shortDescription:
      "Investigated Linux authentication failures, PAM subsystem events, and privilege escalation telemetry in /var/log/auth.log using Bash, regular expressions, and timeline reconstruction.",
    category: "Log Analysis & Host Forensics",
    status: "Completed Lab",
    github: "https://github.com/Puja2059/linux-log-forensics-lab",
    githubLabel: "Puja2059/linux-log-forensics-lab",
    technologies: ["Kali Linux", "PAM", "Rsyslog", "Syslog", "Bash", "Regular Expressions", "Grep / Awk"],

    problemObjective:
      "When a host is compromised or subjected to unauthorized access attempts, system logs represent the primary forensic artifact. The goal of this lab was to generate controlled security events on Linux, inspect the resulting log telemetry in /var/log/auth.log, write regex parsing scripts to extract key forensic fields, and construct an accurate chronological incident timeline.",

    environmentArchitecture:
      "Kali Linux standalone workstation running systemd-journald and rsyslog, configured to capture authentication events across SSH, local TTY, su, and sudo subsystems.",

    architectureFlow: [
      { step: "Raw Log", detail: "Unstructured auth.log and syslog stream generated by system daemons" },
      { step: "Log Parsing", detail: "Bash, grep, and regex patterns isolate targeted authentication events" },
      { step: "Event Extraction", detail: "Extraction of timestamps, UID/EUID, process ID, source IP, and target username" },
      { step: "Timeline Reconstruction", detail: "Chronological sequencing of authentication failures and escalations" },
      { step: "Security Interpretation", detail: "Determination of attack intent (e.g., brute force vs privilege abuse)" }
    ],

    whatIImplemented: [
      "Simulated controlled unauthorized access events, including multiple failed SSH logins and bad sudo password entries.",
      "Monitored and examined `/var/log/auth.log` and `/var/log/secure` in real time using `tail -f` and `journalctl`.",
      "Analyzed Pluggable Authentication Module (PAM) messages, noting the transition from pam_unix failure to authentication rejection.",
      "Constructed Bash scripts using regular expressions, grep, awk, and sed to parse out high-value forensic attributes.",
      "Extracted UID and EUID (effective user ID) transitions during `sudo` and `su` commands to verify privilege escalation.",
      "Filtered out benign administrative noise from anomalous repetitive login attempts.",
      "Reconstructed an end-to-end incident timeline showing initial failed attempts leading to a privilege escalation attempt."
    ],

    securityRelevance:
      "In any security operations center, log analysis is the core investigative activity. Defenders must know how to parse raw log strings without relying solely on automated GUIs, identifying the exact timestamp, account, and process associated with suspicious behavior.",

    sampleLabData: {
      title: "Example / Lab Data: Raw auth.log Parsing & Timeline Extraction",
      type: "terminal-log",
      code: `[RAW LOG TELEMETRY - /var/log/auth.log]
Sep 18 10:14:02 kali sshd[24810]: Failed password for invalid user admin from 192.168.1.105 port 49210 ssh2
Sep 18 10:14:05 kali sshd[24814]: Failed password for invalid user admin from 192.168.1.105 port 49214 ssh2
Sep 18 10:14:09 kali sshd[24819]: Failed password for user student from 192.168.1.105 port 49218 ssh2
Sep 18 10:15:22 kali sudo:   student : TTY=pts/1 ; PWD=/home/student ; USER=root ; COMMAND=/bin/cat /etc/shadow

[FORENSIC EXTRACTION & INTERPRETATION]
[10:14:02 - 10:14:09] 3x Failed SSH Logins from Source: 192.168.1.105 (Target accounts: admin, student)
[10:15:22] Critical Privilege Event: User 'student' invoked sudo to read sensitive file (/etc/shadow)
Forensic Finding: External reconnaissance / brute-force followed by internal unauthorized privilege abuse.`
    },

    whatILearned: [
      "Linux Logging Architecture: The interplay between systemd-journald, rsyslog, and /var/log facilities.",
      "PAM Lifecycle: How Linux verifies identity and records success/failure through pluggable authentication modules.",
      "Command-Line Forensics: Crafting precise regular expressions and awk pipelines to extract forensic fields.",
      "UID / EUID Mechanics: Tracking user identifier changes during privilege elevation commands.",
      "Timeline Reconstruction: Transforming scattered log events into a coherent incident story.",
      "Investigative Mindset: Validating whether an event represents malicious intent or benign administrative maintenance."
    ]
  },

  {
    id: "basic-network-sniffer",
    title: "Basic Network Sniffer – Packet Capture Tool",
    shortDescription:
      "Developed a Python network traffic capture and packet decoding utility that unpacks Ethernet frames, decodes IPv4 headers, and dissects TCP, UDP, and ICMP protocols at the socket level.",
    category: "Network Security & Packet Analysis",
    status: "Completed Project",
    github: "https://github.com/Puja2059/Basic-Network-Sniffer",
    githubLabel: "Puja2059/Basic-Network-Sniffer",
    technologies: ["Python", "Raw Sockets", "Scapy", "TCP/IP", "UDP", "ICMP", "Ethernet 802.3"],

    problemObjective:
      "Gain a deep, protocol-level understanding of how network data travels over the wire. Rather than viewing traffic only through finished tools like Wireshark, the objective was to write socket-level Python code that intercepts raw byte streams, parses header bitfields, and extracts security-relevant protocol parameters.",

    environmentArchitecture:
      "Linux/Kali development environment using Python 3, raw network sockets (AF_PACKET / SOCK_RAW), and Scapy library for packet capture, structured dissection, and packet inspection.",

    architectureFlow: [
      { step: "Network Interface", detail: "Promiscuous / raw socket binding captures incoming frames" },
      { step: "Ethernet Frame Decode", detail: "Unpacks 14-byte header: Source MAC, Destination MAC, Protocol Type" },
      { step: "IPv4 Header Parse", detail: "Extracts Version, Header Length, TTL, Protocol ID, Source/Dest IP" },
      { step: "Transport Layer Dissect", detail: "Branches into TCP (ports/flags), UDP (ports), or ICMP (type/code)" },
      { step: "Payload Inspection", detail: "Decodes application payload bytes into formatted hex/ASCII output" }
    ],

    whatIImplemented: [
      "Initialized raw sockets to capture link-layer frames across local network interfaces.",
      "Implemented binary unpacking (`struct.unpack`) to parse 14-byte Ethernet headers and determine EtherType.",
      "Extracted and formatted source and destination MAC addresses in standard hexadecimal notation.",
      "Decoded IPv4 packets: calculating Internet Header Length (IHL), extracting Time To Live (TTL), and identifying upper-layer protocol numbers.",
      "Dissected TCP segments: extracted source/dest ports, sequence and ACK numbers, and parsed individual flag bits (SYN, ACK, FIN, RST, PSH, URG).",
      "Dissected UDP datagrams and ICMP echo requests/replies.",
      "Formatted packet summaries in real time to aid quick triage of network conversations."
    ],

    securityRelevance:
      "Deep packet inspection (DPI) is essential for security analysts. Understanding packet-level traffic is foundational for network troubleshooting, anomaly detection, spotting port scans (e.g. TCP SYN sweeps), detecting cleartext protocol exposures, and analyzing command-and-control traffic.",

    sampleLabData: {
      title: "Example / Lab Data: Sniffer Packet Dissection Output",
      type: "terminal-log",
      code: `[BASIC NETWORK SNIFFER - REAL-TIME CAPTURE]
[+] Ethernet Frame:
    Destination: 00:0c:29:4f:8e:12, Source: 00:0c:29:a1:33:04, Protocol: 0x0800 (IPv4)
    [+] IPv4 Packet:
        Version: 4, Header Length: 20 bytes, TTL: 64
        Protocol: 6 (TCP)
        Source IP: 192.168.1.105  ->  Destination IP: 192.168.1.1
        [+] TCP Segment:
            Source Port: 54122  ->  Destination Port: 80 (HTTP)
            Sequence: 104829104, Acknowledgment: 0
            Flags: [ SYN ] (Flag value: 0x002) - Possible connection initiation / scan
            Payload Data (0 bytes - Handshake Packet)`
    },

    whatILearned: [
      "Protocol Anatomy: Concrete understanding of Ethernet, IP, TCP, and UDP binary header structures.",
      "Bitwise Operations: Parsing packed bitfields such as TCP flags and IP header lengths in Python.",
      "Traffic Analysis: How network scanners manipulate TCP flags (SYN vs FIN vs NULL scans) to map hosts.",
      "Cleartext Risks: Directly observing how protocols lacking encryption expose data payloads to any sniffer on the segment.",
      "Foundations for Wireshark: Gaining intuition for what GUI tools like Wireshark and Tshark do behind the scenes."
    ]
  },

  {
    id: "cisco-network-security",
    title: "Cisco Switched Network Security & Routing",
    shortDescription:
      "Designed an enterprise segmented network in Cisco Packet Tracer with VLAN isolation, 802.1Q trunking, Router-on-a-Stick inter-VLAN routing, Layer-2 port security, and ACL boundary controls.",
    category: "Network Defense & Infrastructure",
    status: "Completed Project",
    github: "https://github.com/Puja2059/cisco-network-security",
    githubLabel: "Puja2059/cisco-network-security",
    technologies: ["Cisco Packet Tracer", "VLANs", "802.1Q", "ACLs", "Port Security", "Inter-VLAN Routing"],

    problemObjective:
      "Flat, unsegmented networks allow attackers to move laterally with zero impedance once a single machine is compromised. The objective of this project was to design an enterprise-style segmented network topology, isolate distinct departments using VLANs, implement controlled inter-VLAN routing, and harden the switched access layer against Layer-2 attacks.",

    environmentArchitecture:
      "Multi-switch enterprise architecture in Cisco Packet Tracer featuring Cisco 2960 Access switches, Cisco 3560 Core/Distribution switches, and Cisco 1941 Router configured for Router-on-a-Stick subinterface routing.",

    architectureFlow: [
      { step: "Access Layer", detail: "End devices connect to switchports with Layer-2 Port Security enabled" },
      { step: "VLAN Segmentation", detail: "Departments segmented into isolated broadcast domains (VLAN 10, 20, 30)" },
      { step: "802.1Q Trunking", detail: "Inter-switch links carry tagged frames across the switching fabric" },
      { step: "Router-on-a-Stick", detail: "Router subinterfaces route traffic between authorized VLANs" },
      { step: "ACL Enforcement", detail: "Standard and extended ACLs filter unauthorized cross-department and ICMP traffic" }
    ],

    whatIImplemented: [
      "Designed and configured separate VLANs for different organizational roles (Management, Engineering, Guest).",
      "Configured 802.1Q trunk links between switches with dedicated native VLANs for security hardening.",
      "Configured Router-on-a-Stick with dot1q subinterfaces to serve as default gateways for each VLAN.",
      "Configured Layer-2 Port Security on access ports: set maximum MAC addresses to 1, enabled sticky MAC learning, and set violation mode to `shutdown`.",
      "Implemented Extended Access Control Lists (ACLs) to block untrusted guest subnets from reaching internal servers while permitting outbound web access.",
      "Applied Standard ACLs to restrict administrative VTY (Telnet/SSH) access exclusively to the management VLAN subnet.",
      "Executed testing procedures: validated that VLAN separation prevented broadcast spills and verified ACL blocks using simulated ping and HTTP requests."
    ],

    securityRelevance:
      "Network segmentation is a foundational security control required by major security frameworks (NIST, CIS). Restricting lateral movement through VLANs and ACLs prevents an initial beachhead from escalating into a full domain compromise. Layer-2 port security additionally stops rogue device attachment and MAC flooding attacks.",

    sampleLabData: {
      title: "Example / Lab Data: Cisco IOS Port Security & ACL Configuration",
      type: "terminal-log",
      code: `! Hardening Access Switch Ports with Port Security
Switch(config)# interface range FastEthernet 0/1 - 10
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# switchport port-security
Switch(config-if-range)# switchport port-security maximum 1
Switch(config-if-range)# switchport port-security mac-address sticky
Switch(config-if-range)# switchport port-security violation shutdown

! Extended ACL Restricting Inter-VLAN Access to Server Subnet
Router(config)# ip access-list extended BLOCK_GUEST_TO_INTERNAL
Router(config-ext-nacl)# deny ip 192.168.30.0 0.0.0.255 192.168.10.0 0.0.0.255
Router(config-ext-nacl)# permit tcp 192.168.30.0 0.0.0.255 any eq 80
Router(config-ext-nacl)# permit tcp 192.168.30.0 0.0.0.255 any eq 443
Router(config-ext-nacl)# deny ip any any log`
    },

    whatILearned: [
      "Layer 2 Attack Vectors: How MAC flooding, DHCP starvation, and rogue devices threaten access switches.",
      "Port Security Operation: The mechanics of shutdown violation mode and sticky MAC caching.",
      "VLAN Segmentation: Eliminating flat networks to contain broadcast storms and lateral attack paths.",
      "Subinterface Routing: Configuring Router-on-a-Stick and understanding encapsulation overhead.",
      "ACL Logic & Order: Managing implicit deny statements and positioning extended ACLs closest to the source of traffic."
    ]
  }
];
