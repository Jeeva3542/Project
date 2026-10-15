import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  Maximize2,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Sparkles,
} from 'lucide-react';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const { personalInfo } = portfolioData;
  const [viewMode, setViewMode] = useState<'document' | 'iframe'>('document');

  return (
    <section id="resume" className="py-20 bg-midnight text-offWhite border-t border-borderNavy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royalBlue/10 border border-royalBlue/30 text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-skyBlue" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-offWhite tracking-tight">
            Resume &amp; Qualifications
          </h2>
          <div className="w-12 h-1 bg-royalBlue mx-auto rounded-full mt-3 mb-4" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Review my complete resume directly in the browser, expand it into full-screen view, or download the official PDF.
          </p>
        </div>

        {/* Content Layout: Viewer on the Left, Quick Fact Sheet on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Resume Viewer Container (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-cardNavy rounded-2xl border border-borderNavy shadow-card overflow-hidden transition-all duration-300 hover:border-royalBlue/40">
              {/* Card Header & Controls Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-deepNavy border-b border-borderNavy">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-royalBlue/20 text-skyBlue border border-royalBlue/30 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-offWhite block leading-tight">
                      {personalInfo.contact.resumeFileName}
                    </span>
                    <span className="text-[11px] text-mutedGray flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Verified Document • 1 Page
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Mode switcher (Document vs Iframe) */}
                  <div className="hidden sm:flex items-center bg-cardNavy p-0.5 rounded-lg border border-borderNavy text-xs">
                    <button
                      type="button"
                      onClick={() => setViewMode('document')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                        viewMode === 'document'
                          ? 'bg-royalBlue text-white shadow-sm'
                          : 'text-coolGray hover:text-offWhite'
                      }`}
                      title="Optimized document preview"
                    >
                      Document
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('iframe')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                        viewMode === 'iframe'
                          ? 'bg-royalBlue text-white shadow-sm'
                          : 'text-coolGray hover:text-offWhite'
                      }`}
                      title="Native PDF viewer with browser toolbar"
                    >
                      PDF Frame
                    </button>
                  </div>

                  {/* Expand / Fullscreen Button */}
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cardNavy hover:bg-cardNavy/80 text-coolGray hover:text-skyBlue border border-borderNavy hover:border-skyBlue/50 text-xs font-medium transition-all"
                    title="Open full interactive modal viewer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-skyBlue" />
                    <span>Fullscreen</span>
                  </button>

                  {/* Open in Tab */}
                  <a
                    href={personalInfo.contact.resumeDownloadPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-cardNavy hover:bg-cardNavy/80 text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue/50 transition-all text-xs"
                    title="Open PDF in new tab"
                  >
                    <ExternalLink className="w-4 h-4 text-skyBlue" />
                  </a>
                </div>
              </div>

              {/* Viewer Window */}
              <div className="relative bg-midnight/90 p-3 sm:p-5 flex justify-center items-center min-h-[480px] max-h-[720px] overflow-auto">
                {viewMode === 'document' ? (
                  <div
                    onClick={onOpenResumeModal}
                    className="cursor-pointer group relative max-w-[580px] w-full rounded-xl overflow-hidden shadow-2xl border border-borderNavy/80 transition-all duration-300 hover:scale-[1.01] hover:border-skyBlue/50"
                    title="Click to view full-screen in interactive modal"
                  >
                    {/* Hover Overlay with "Click to Enlarge" banner */}
                    <div className="absolute inset-0 bg-midnight/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-200 flex items-center justify-center z-10">
                      <div className="px-4 py-2 rounded-xl bg-royalBlue text-white text-xs font-semibold shadow-glow-blue flex items-center gap-2">
                        <Eye className="w-4 h-4 text-skyBlue" />
                        <span>Click to Enlarge &amp; Zoom</span>
                      </div>
                    </div>

                    <picture>
                      <source
                        srcSet={personalInfo.contact.resumePreviewImage}
                        type="image/webp"
                      />
                      <img
                        src={personalInfo.contact.resumePreviewFallback}
                        alt={`${personalInfo.name} Official Resume Preview`}
                        className="w-full h-auto block select-none bg-white"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                ) : (
                  <div className="w-full h-[620px] rounded-xl overflow-hidden bg-white shadow-xl border border-borderNavy">
                    <iframe
                      src={`${personalInfo.contact.resumeDownloadPath}#toolbar=1&navpanes=0`}
                      title={`${personalInfo.name} Resume Document Frame`}
                      className="w-full h-full border-0"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Quick-Bar inside card */}
              <div className="px-4 sm:px-6 py-3 bg-deepNavy border-t border-borderNavy flex flex-wrap items-center justify-between gap-3 text-xs text-mutedGray">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Includes complete contact, project, and education details</span>
                </span>
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="text-skyBlue hover:text-white underline underline-offset-2 font-medium"
                >
                  Expand Interactive View →
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Key Resume Highlights & Direct Actions (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Box */}
            <div className="bg-cardNavy rounded-2xl p-6 sm:p-7 border border-borderNavy shadow-card space-y-5">
              <div className="flex items-center gap-2 text-offWhite font-bold text-lg">
                <Sparkles className="w-5 h-5 text-skyBlue" />
                <span>Resume Actions</span>
              </div>
              <p className="text-xs text-coolGray leading-relaxed">
                Directly access, inspect, or download my verified credentials for recruitment and technical screening.
              </p>

              <div className="flex flex-col gap-3">
                {/* Primary Button: View Interactive Resume */}
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-skyBlue"
                >
                  <Eye className="w-4 h-4 text-skyBlue" />
                  <span>View Resume Fullscreen</span>
                </button>

                {/* Secondary Button: Download PDF */}
                <a
                  href={personalInfo.contact.resumeDownloadPath}
                  download={personalInfo.contact.resumeFileName}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-coolGray hover:text-offWhite bg-deepNavy hover:bg-cardNavy border border-borderNavy hover:border-skyBlue/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-skyBlue" />
                  <span>Download PDF (Direct)</span>
                </a>

                {/* Tertiary Button: Open in New Browser Tab */}
                <a
                  href={personalInfo.contact.resumeDownloadPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-mutedGray hover:text-offWhite hover:bg-deepNavy rounded-xl border border-transparent hover:border-borderNavy transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-skyBlue" />
                  <span>Open raw PDF in new browser tab</span>
                </a>
              </div>
            </div>

            {/* Resume Summary Digest Card */}
            <div className="bg-cardNavy rounded-2xl p-6 sm:p-7 border border-borderNavy shadow-card space-y-5">
              <h3 className="text-base font-bold text-offWhite flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-skyBlue" />
                <span>Curriculum Vitae Digest</span>
              </h3>

              <div className="space-y-4 text-xs">
                {/* Education */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-deepNavy border border-borderNavy/60">
                  <div className="p-2 rounded-lg bg-royalBlue/10 text-skyBlue shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-offWhite block">B.E. Computer Science &amp; Engineering</span>
                    <span className="text-mutedGray text-[11px] block">PMC Tech • CGPA: 7.53 (2021 – 2025)</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-deepNavy border border-borderNavy/60">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-offWhite block">Python Development &amp; Training</span>
                    <span className="text-mutedGray text-[11px] block">Growwpark Technologies &amp; Apollo Computer Education</span>
                  </div>
                </div>

                {/* Projects */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-deepNavy border border-borderNavy/60">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-offWhite block">Key Software &amp; ML Projects</span>
                    <span className="text-mutedGray text-[11px] block">Multimodal Alzheimer's Diagnostic &amp; Phishing Detection</span>
                  </div>
                </div>

                {/* Credentials */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-deepNavy border border-borderNavy/60">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-offWhite block">9 Professional Certifications</span>
                    <span className="text-mutedGray text-[11px] block">AWS Cloud, Cisco Security, Python &amp; Applied AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
