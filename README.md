# Puja Bhatt – Cybersecurity & SOC Analyst Portfolio

A professional, high-contrast, modern cybersecurity portfolio website engineered with **React**, **Vite**, and **Tailwind CSS**. 

Specifically designed to position **Puja Bhatt** as a credible **Cybersecurity / SOC Analyst candidate**, highlighting hands-on proof-of-work in **Security Operations**, **SIEM (Wazuh)**, **Network Security**, **Incident Detection**, **Log Forensics**, and **Web Application Hardening**.

---

## 🎯 Key Design & Identity Principles

- **SOC / Defensive Aesthetic**: Sleek dark terminal and console aesthetics with high contrast, subtle cyber grid accents, and clean typography (Inter + JetBrains Mono).
- **Authentic Proof-of-Work**: Strictly avoids exaggerated claims, fake statistics, or generic "passionate developer" templates.
- **Deep-Dive Engineering Dossiers**: Every project features an interactive architecture flow, problem statement, technical implementation breakdown, security relevance, takeaway checklist, and lab telemetry artifacts.
- **Maintainable Data Architecture**: All content (profile, projects, labs, experience, skills, training) is cleanly decoupled into modular data files under `src/data/`.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── Puja_Bhatt_Resume.pdf   # Downloadable ATS-formatted resume
│   └── favicon.svg             # Cyber shield vector icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism nav with active tracker & drawer
│   │   ├── Hero.jsx            # Headline, core focus chips & interactive SOC console
│   │   ├── About.jsx           # Background, interest drivers & journey timeline
│   │   ├── Projects.jsx        # Project cards with filter pills & flow diagrams
│   │   ├── ProjectModal.jsx    # In-depth 8-section investigation & telemetry modal
│   │   ├── SecurityLabs.jsx    # Hands-on lab drills (Wazuh, Linux, Wireshark, etc.)
│   │   ├── Experience.jsx      # Virtual SOC Analyst Trainee program details
│   │   ├── Skills.jsx          # Categorized domain skills with practical context notes
│   │   ├── Training.jsx        # TryHackMe foundational training rooms
│   │   ├── Resume.jsx          # CV showcase box with View/Download buttons
│   │   ├── ResumeModal.jsx     # ATS-ready printable resume modal viewer
│   │   ├── Contact.jsx         # Direct email copy, LinkedIn/GitHub links & mailto form
│   │   ├── Footer.jsx          # Professional footer with verified profile links
│   │   └── Icons.jsx           # Clean SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   ├── profile.js          # Personal details, narrative, journey timeline
│   │   ├── projects.js         # 5 core projects with architecture flows & lab data
│   │   ├── labs.js             # 7 hands-on practice labs & platforms
│   │   ├── experience.js       # Virtual SOC Analyst Trainee details
│   │   ├── skills.js           # 6 categorized skill groups with proficiency notes
│   │   └── training.js         # TryHackMe completed curriculum modules
│   ├── App.jsx                 # Main layout and modal state management
│   ├── index.css               # Tailwind v4 styles, cyber grid & scrollbars
│   └── main.jsx                # React root entrypoint
├── index.html                  # SEO meta tags, OpenGraph data, Google Fonts
├── package.json
└── vite.config.js              # Vite configuration with Tailwind CSS plugin
```

---

## 🛠️ How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18+ or v24 LTS recommended) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Your Content

To customize or update information in the future without touching the layout code, simply edit the corresponding file in `src/data/`:

| What to Update | File to Edit |
|---|---|
| Bio, Location, Social Links, Journey Timeline | [`src/data/profile.js`](file:///c:/Users/asus/Documents/Puja2059.github.io/src/data/profile.js) |
| Core Projects, Architecture, Code/Lab Snippets | [`src/data/projects.js`](file:///c:/Users/asus/Documents/Puja2059.github.io/src/data/projects.js) |
| Hands-on Labs & CTF/Sandbox Drills | [`src/data/labs.js`](file:///c:/Users/asus/Documents/Puja2059.github.io/src/data/labs.js) |
| Trainee Programs & Work Experience | [`src/data/experience.js`](file:///c:/Users/asus/Documents/Puja2059.github.io/src/data/experience.js) |
| Technical Skills by Category | [`src/data/skills.js`](file:///c:/Users/asus/Documents/Puja2059.github.io/src/data/skills.js) |
| Training Modules (TryHackMe, etc.) | [`src/data/training.js`](file:///c:/Users/asus/Documents/Puja2059.github.io/src/data/training.js) |

---

## 🚀 GitHub Pages Deployment

The repository is configured for automatic deployment via GitHub Actions:
- Whenever you push code to `main` or `master`, the workflow defined in [`.github/workflows/deploy.yml`](file:///c:/Users/asus/Documents/Puja2059.github.io/.github/workflows/deploy.yml) automatically builds the production bundle and deploys it to `https://puja2059.github.io/`.
- In your GitHub repository settings under **Settings → Pages**, ensure the source is set to **GitHub Actions**.

---

© 2026 Puja Bhatt. Built for Cybersecurity and SOC Analyst opportunities.
