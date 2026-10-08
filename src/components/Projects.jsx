import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Network,
  Cpu,
  Search,
  Maximize2
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Security Operations & SIEM', 'Web Security & Vulnerability Assessment', 'Log Analysis & Host Forensics', 'Network Security & Packet Analysis', 'Network Defense & Infrastructure'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#080c16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION: TECHNICAL_PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Cybersecurity & Detection Projects
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-3xl">
            Detailed engineering proof-of-work across SIEM detection rules, web vulnerability scanning, packet sniffing, log forensics, and switched security.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-600 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat === 'ALL' ? 'All Projects (5)' : cat.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-cyan-950/20 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Card Top Banner */}
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-medium">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      ● {project.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    ID: {project.id}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Architecture Flow Preview */}
                <div className="bg-[#080d18] border border-slate-800/90 rounded-xl p-3.5 sm:p-4">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>ARCHITECTURE & INVESTIGATION PIPELINE</span>
                    <span className="text-cyan-400 text-[10px] font-mono">FLOW DIAGRAM</span>
                  </div>
                  
                  {/* Flow Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {project.architectureFlow.map((flowItem, fIdx) => (
                      <React.Fragment key={fIdx}>
                        <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-200">
                          {flowItem.step}
                        </span>
                        {fIdx < project.architectureFlow.length - 1 && (
                          <span className="text-cyan-500 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Key Implementation Highlights */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Implementation Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-sans">
                    {project.whatIImplemented.slice(0, 3).map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Bottom Actions */}
              <div className="px-6 sm:px-7 py-4 bg-[#090e1a] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 hover:bg-cyan-500 hover:text-slate-950 transition-all cursor-pointer shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Details & Evidence</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal display when clicked */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
