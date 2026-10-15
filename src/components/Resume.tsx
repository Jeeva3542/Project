import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Sparkles,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const { personalInfo } = portfolioData;

  const qualificationsList = [
    {
      icon: <GraduationCap className="w-5 h-5 text-skyBlue" />,
      accentBg: 'bg-royalBlue/10 border-royalBlue/30',
      title: 'Academic Education',
      primary: 'B.E. Computer Science & Engineering',
      secondary: 'Er. Perumal Manimekalai College of Engineering, Hosur',
      metric: 'CGPA: 7.53*',
      metricLabel: 'Batch 2021 – 2025',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      accentBg: 'bg-emerald-500/10 border-emerald-500/30',
      title: 'Industrial Experience',
      primary: 'Python Development Internships',
      secondary: 'Growwpark Technologies & Apollo Computer Education',
      metric: '2+ Roles',
      metricLabel: 'Verified Certificates',
    },
    {
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      accentBg: 'bg-purple-500/10 border-purple-500/30',
      title: 'Technical Specialization',
      primary: 'Applied Machine Learning & Python',
      secondary: 'Multimodal Diagnostics, Threat Detection & Database Systems',
      metric: '2 Projects',
      metricLabel: 'Hands-on ML Pipelines',
    },
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      accentBg: 'bg-amber-500/10 border-amber-500/30',
      title: 'Credentials & Awards',
      primary: '9 Professional Certifications + 2nd Place Quiz',
      secondary: 'Cloud, Cybersecurity, AI/ML & National IT Fest Award',
      metric: '9+ Credentials',
      metricLabel: 'Verified Industry Credentials',
    },
  ];

  return (
    <section id="qualifications" className="py-24 bg-midnight text-offWhite border-t border-borderNavy relative">
      <div id="resume" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royalBlue/10 border border-royalBlue/30 text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-skyBlue" />
            <span>Curriculum Vitae &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            Qualifications
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Summary of academic qualifications, professional background, and verified technical credentials.
          </p>
        </div>

        {/* Main Resume Showcase Card (Clean View Section) */}
        <div className="max-w-4xl mx-auto bg-cardNavy rounded-3xl border border-borderNavy shadow-card p-6 sm:p-10 mb-12 hover:border-royalBlue/40 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-borderNavy">
            {/* Document Identity */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-royalBlue/20 text-skyBlue border border-royalBlue/30 flex items-center justify-center shrink-0 shadow-glow-blue">
                <FileCheck className="w-7 h-7 text-skyBlue" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Document
                  </span>
                  <span className="text-xs text-mutedGray">•</span>
                  <span className="text-xs text-mutedGray">1 Page Curriculum Vitae</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-offWhite leading-tight">
                  {personalInfo.name} — Official Resume
                </h3>
                <p className="text-xs sm:text-sm text-coolGray">
                  Complete technical profile, B.E. Computer Science degree, and certified internship record.
                </p>
              </div>
            </div>

            {/* Action Buttons: View Complete Resume + Download */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-skyBlue"
                title="Click to view full interactive resume"
              >
                <Eye className="w-4 h-4 text-skyBlue" />
                <span>View Complete Resume</span>
              </button>

              <a
                href={personalInfo.contact.resumeDownloadPath}
                download={personalInfo.contact.resumeFileName}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-coolGray hover:text-offWhite bg-deepNavy hover:bg-cardNavy border border-borderNavy hover:border-skyBlue/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                title="Direct download PDF"
              >
                <Download className="w-4 h-4 text-skyBlue" />
                <span>Download PDF</span>
              </a>

              <a
                href={personalInfo.contact.resumeDownloadPath}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-deepNavy hover:bg-cardNavy text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue/50 transition-colors"
                title="Open raw PDF in new browser tab"
              >
                <ExternalLink className="w-4 h-4 text-skyBlue" />
              </a>
            </div>
          </div>

          {/* Quick Notice strip */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-mutedGray">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-skyBlue shrink-0" />
              <span>Click <strong>"View Complete Resume"</strong> to inspect the verified document with interactive zoom and print controls.</span>
            </span>
            <span className="font-mono text-[11px] text-skyBlue bg-deepNavy px-2.5 py-1 rounded-lg border border-borderNavy">
              {personalInfo.contact.resumeFileName}
            </span>
          </div>
        </div>

        {/* Structured Qualifications Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {qualificationsList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-cardNavy border border-borderNavy hover:border-skyBlue/50 transition-all duration-300 shadow-card flex items-start gap-4 group"
            >
              <div className={`p-3 rounded-xl border shrink-0 ${item.accentBg}`}>
                {item.icon}
              </div>
              <div className="space-y-1 min-w-0 flex-grow">
                <span className="text-[11px] uppercase font-bold tracking-wider text-mutedGray block">
                  {item.title}
                </span>
                <h4 className="text-base font-bold text-offWhite group-hover:text-skyBlue transition-colors leading-snug">
                  {item.primary}
                </h4>
                <p className="text-xs text-coolGray leading-relaxed">
                  {item.secondary}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                  <span className="text-skyBlue font-mono">{item.metric}</span>
                  <span className="text-mutedGray text-[11px] font-normal">{item.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Contact & Verification */}
        <div className="mt-12 text-center text-xs text-mutedGray max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>All academic scores, project milestones, and internship durations are verified from original institutional records.</span>
        </div>
      </div>
    </section>
  );
};
