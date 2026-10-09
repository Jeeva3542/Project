import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import {
  FolderGit2,
  Brain,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects, personalInfo } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-deepNavy text-offWhite border-t border-borderNavy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cardNavy border border-borderNavy text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            Featured Projects
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Machine learning and data science projects developed during undergraduate engineering.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => {
            const isAlzheimer = project.id === 'alzheimer-diagnostic';
            return (
              <div
                key={project.id}
                className="bg-cardNavy rounded-2xl border border-borderNavy shadow-card hover:shadow-card-hover hover:border-skyBlue/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header / Banner Strip */}
                <div className="p-6 sm:p-7 pb-5 border-b border-borderNavy bg-midnight/60">
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-deepNavy text-skyBlue border border-borderNavy">
                      {isAlzheimer ? <Brain className="w-3.5 h-3.5 text-skyBlue" /> : <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{project.category}</span>
                    </span>
                    <span className="text-xs font-mono text-mutedGray">
                      Academic Year {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-snug text-offWhite group-hover:text-skyBlue transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Overview & Problem */}
                  <div className="space-y-4">
                    <p className="text-sm text-coolGray leading-relaxed">
                      {project.shortOverview}
                    </p>

                    {/* Problem snapshot */}
                    <div className="p-4 rounded-xl bg-deepNavy border border-borderNavy text-xs text-coolGray">
                      <span className="font-bold text-offWhite block mb-1">Target Challenge:</span>
                      <span className="line-clamp-2">{project.problem}</span>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2">
                      <span className="text-xs uppercase font-bold tracking-wider text-mutedGray block">
                        Core Methodologies:
                      </span>
                      <ul className="space-y-1.5 text-xs text-coolGray">
                        {project.technicalApproach.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-skyBlue mt-1.5 shrink-0" />
                            <span className="line-clamp-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technology Tags & Action Footer */}
                  <div className="space-y-4 pt-5 border-t border-borderNavy/60">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-deepNavy border border-borderNavy text-coolGray font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-skyBlue hover:text-offWhite focus:outline-none group/btn transition-colors"
                      >
                        <span>View Architecture & Details</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <a
                        href={personalInfo.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-mutedGray hover:text-offWhite transition-colors"
                        title="View author GitHub profile"
                      >
                        <Code2 className="w-3.5 h-3.5 text-skyBlue" />
                        <span>GitHub Profile</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Ethics & Authenticity Note */}
        <div className="mt-12 text-center text-xs text-mutedGray max-w-xl mx-auto bg-cardNavy p-4 rounded-xl border border-borderNavy shadow-sm">
          <Sparkles className="w-4 h-4 text-skyBlue inline mr-1.5" />
          <span>Projects documented reflect genuine academic implementations without fabricated live links or unverified claims.</span>
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
