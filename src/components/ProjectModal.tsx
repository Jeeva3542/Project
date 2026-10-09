import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import {
  X,
  CheckCircle2,
  Cpu,
  AlertCircle,
  Layers,
  ArrowRight,
  Brain,
  ShieldAlert,
  GitBranch,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isAlzheimer = project.id === 'alzheimer-diagnostic';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-midnight/90 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-cardNavy rounded-2xl shadow-2xl overflow-y-auto border border-borderNavy p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-mutedGray hover:text-offWhite hover:bg-deepNavy border border-transparent hover:border-borderNavy transition-all focus:outline-none focus:ring-2 focus:ring-skyBlue"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-mutedGray">•</span>
            <span className="text-xs font-semibold text-mutedGray">Year: {project.year}</span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-offWhite leading-tight">
            {project.title}
          </h2>
          <p className="text-sm text-coolGray mt-2 leading-relaxed">
            {project.shortOverview}
          </p>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm text-coolGray">
          {/* Problem Statement */}
          <div className="p-4 sm:p-5 rounded-xl bg-deepNavy border border-borderNavy">
            <h3 className="font-bold text-offWhite flex items-center gap-2 mb-2.5 text-base">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <span>Problem Addressed</span>
            </h3>
            <p className="text-coolGray leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* ML Pipeline Diagram */}
          <div className="p-5 rounded-xl bg-deepNavy border border-borderNavy">
            <h3 className="font-bold text-offWhite flex items-center gap-2 mb-3.5 text-base">
              {isAlzheimer ? <Brain className="w-5 h-5 text-skyBlue" /> : <ShieldAlert className="w-5 h-5 text-skyBlue" />}
              <span>Machine Learning & Technical Architecture</span>
            </h3>

            {isAlzheimer ? (
              <div className="space-y-3">
                <p className="text-xs text-mutedGray">
                  Multimodal data fusion combining handwriting image analysis with dynamic kinematic features:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs text-center">
                  {[
                    { step: '1. Input Data', detail: 'Handwriting + Kinematics' },
                    { step: '2. Feature Extractor', detail: 'Pre-trained VGG16 CNN' },
                    { step: '3. Optimization', detail: 'Binary Grey Wolf (B-GWO)' },
                    { step: '4. Classification', detail: 'Support Vector Machine' },
                  ].map((s, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-cardNavy border border-borderNavy hover:border-skyBlue/40 transition-colors">
                      <div className="text-skyBlue font-bold text-[11px]">{s.step}</div>
                      <div className="text-[10px] text-mutedGray mt-1">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-mutedGray">
                  Dual-tier supervised classification comparing linear and tree-based decision models:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs text-center">
                  {[
                    { step: '1. Raw Content', detail: 'Text & URL strings' },
                    { step: '2. Preprocessing', detail: 'Tokenize & Clean' },
                    { step: '3. Feature Vectors', detail: 'Pandas & NumPy' },
                    { step: '4. Model Training', detail: 'LogReg & Decision Tree' },
                  ].map((s, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-cardNavy border border-borderNavy hover:border-skyBlue/40 transition-colors">
                      <div className="text-skyBlue font-bold text-[11px]">{s.step}</div>
                      <div className="text-[10px] text-mutedGray mt-1">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technical Approach */}
          <div>
            <h3 className="font-bold text-offWhite flex items-center gap-2 mb-3 text-base">
              <Layers className="w-5 h-5 text-skyBlue" />
              <span>Technical Approach & Implementation</span>
            </h3>
            <ul className="space-y-2.5">
              {project.technicalApproach.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-coolGray leading-relaxed">
                  <ArrowRight className="w-4 h-4 text-skyBlue shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-bold text-offWhite flex items-center gap-2 mb-3 text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Features & Outcomes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="p-3 rounded-lg bg-deepNavy border border-borderNavy flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="text-xs text-coolGray leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-bold text-offWhite flex items-center gap-2 mb-3 text-base">
              <Cpu className="w-5 h-5 text-skyBlue" />
              <span>Technologies & Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-royalBlue/20 text-skyBlue font-mono text-xs font-semibold border border-royalBlue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-borderNavy flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-mutedGray">
            <GitBranch className="w-4 h-4 text-mutedGray" />
            <span>Academic Project • B.E. Computer Science</span>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-coolGray hover:text-offWhite bg-deepNavy hover:bg-cardNavy border border-borderNavy hover:border-skyBlue/50 rounded-xl transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Author GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl transition-colors shadow-glow-blue"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
