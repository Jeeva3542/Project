import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import {
  Download,
  FolderGit2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personalInfo, highlights } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const navOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center bg-midnight text-offWhite pt-28 pb-20 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows & Subtle Tech Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-royalBlue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[28rem] h-[28rem] bg-skyBlue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cardNavy border border-borderNavy text-xs font-semibold text-skyBlue shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
              <Sparkles className="w-3.5 h-3.5 text-skyBlue ml-0.5" />
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-offWhite leading-[1.1] font-sans">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-offWhite via-skyBlue to-royalBlue-light">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-coolGray leading-snug">
                {personalInfo.title}
              </p>
            </div>

            {/* Intro text from resume */}
            <p className="text-base sm:text-lg text-coolGray leading-relaxed max-w-2xl font-normal">
              Final-year Computer Science and Engineering student at Er. Perumal Manimekalai College of Engineering (<span className="text-offWhite font-semibold">7.53 CGPA</span>), with hands-on internship experience in Python development and practical project work in applied machine learning and phishing detection.
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-coolGray pt-1">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cardNavy border border-borderNavy hover:border-skyBlue hover:text-skyBlue transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-skyBlue" />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.contact.rawPhone}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cardNavy border border-borderNavy hover:border-skyBlue hover:text-skyBlue transition-all"
                title="Call Phone"
              >
                <Phone className="w-4 h-4 text-skyBlue" />
                <span>{personalInfo.contact.phone}</span>
              </a>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cardNavy border border-borderNavy text-coolGray">
                <MapPin className="w-4 h-4 text-skyBlue" />
                <span>{personalInfo.contact.location}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Primary 1: Explore Projects */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-skyBlue focus:ring-offset-2 focus:ring-offset-midnight"
              >
                <FolderGit2 className="w-5 h-5 text-skyBlue" />
                <span>Explore My Projects</span>
              </a>

              {/* Primary 2: Download Resume */}
              <a
                href={personalInfo.contact.resumeDownloadPath}
                download={personalInfo.contact.resumeFileName}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-offWhite bg-cardNavy hover:bg-cardNavy/80 hover:border-skyBlue border border-borderNavy rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-skyBlue"
              >
                <Download className="w-5 h-5 text-skyBlue" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons & External Profiles */}
            <div className="flex items-center gap-3.5 pt-2">
              <span className="text-xs uppercase tracking-wider text-mutedGray font-semibold">
                Profiles:
              </span>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-cardNavy hover:bg-cardNavy/80 text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue transition-all hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-skyBlue"
                aria-label="GitHub Profile (github.com/Jeeva3542)"
                title="GitHub: Jeeva3542"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-cardNavy hover:bg-cardNavy/80 text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue transition-all hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-skyBlue"
                aria-label="LinkedIn Profile (linkedin.com/in/jeeva-kumar)"
                title="LinkedIn: jeeva-kumar"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-cardNavy hover:bg-cardNavy/80 text-xs text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue transition-all shadow-sm"
                title="Live Portfolio Link"
              >
                <span>jeeva3542.github.io</span>
                <ExternalLink className="w-3.5 h-3.5 text-skyBlue" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Profile Picture Frame & Quick Metrics */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            {/* Portrait Frame Container */}
            <div className="relative group flex justify-center">
              {/* Outer Ambient Glow with Navy-Blue Palette */}
              <div className="absolute -inset-2 bg-gradient-to-r from-royalBlue/25 via-skyBlue/20 to-royalBlue/25 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main Softly Rounded Frame Card */}
              <div className= "relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-cardNavy via-midnight to-deepNavy border border-borderNavy group-hover:border-skyBlue/50 shadow-2xl backdrop-blur-xl transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-deepNavy border border-borderNavy/70 shadow-inner">
                  <img
                    src={personalInfo.profilePicture}
                    alt={personalInfo.profilePictureAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay at bottom for clean edge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge: Top-Right (Available for Hire) */}
                <div className="absolute -top-3.5 -right-3 sm:-right-4 px-4 py-1.5 rounded-full bg-deepNavy/95 border border-skyBlue/40 text-[11px] font-semibold text-skyBlue shadow-xl backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Entry-Level IT</span>
                </div>

                {/* Floating Badge: Bottom-Left (College & CGPA) */}
                <div className="absolute -bottom-3.5 -left-3 sm:-left-4 px-4 py-2 rounded-2xl bg-deepNavy/95 border border-borderNavy text-xs text-offWhite shadow-xl backdrop-blur-md flex items-center gap-2.5 group-hover:border-skyBlue/40 transition-colors">
                  <div className="w-7 h-7 rounded-xl bg-royalBlue/20 text-skyBlue flex items-center justify-center border border-royalBlue/30">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-offWhite text-[11px] leading-tight">PMC Tech, Hosur</div>
                    <div className="text-[10px] text-skyBlue font-mono font-medium">CGPA: 7.53*</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resume Metric Badges */}
            <div className="mt-8 w-full max-w-sm sm:max-w-md grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-cardNavy border border-borderNavy hover:border-skyBlue/50 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-1.5 text-skyBlue text-[11px] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{h.label}</span>
                  </div>
                  <div className="text-base font-extrabold text-offWhite mt-0.5">{h.value}</div>
                  <div className="text-[10px] text-mutedGray truncate mt-0.5">{h.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
