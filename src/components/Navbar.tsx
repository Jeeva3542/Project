import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Menu, X, ArrowUpRight, Eye } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Qualifications', href: '#qualifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight/95 backdrop-blur-md border-b border-borderNavy shadow-xl shadow-black/30 py-3'
          : 'bg-midnight/80 backdrop-blur-sm border-b border-borderNavy/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Text Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-skyBlue rounded-lg p-1"
            aria-label="Jeeva K Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-royalBlue via-skyBlue to-emerald-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-deepNavy border border-midnight">
                <img
                  src={personalInfo.profilePicture}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-offWhite group-hover:text-skyBlue transition-colors font-sans">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-mutedGray font-semibold -mt-0.5">
                Computer Science Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-skyBlue ${
                    isActive
                      ? 'text-skyBlue bg-cardNavy font-semibold border border-borderNavy shadow-sm'
                      : 'text-coolGray hover:text-offWhite hover:bg-cardNavy/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions: View Resume + Download */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                if (onOpenResumeModal) {
                  onOpenResumeModal();
                } else {
                  const el = document.getElementById('qualifications') || document.getElementById('resume');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-skyBlue bg-cardNavy hover:bg-cardNavy/80 border border-borderNavy hover:border-skyBlue/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-skyBlue"
              title="View resume inside portfolio"
            >
              <Eye className="w-4 h-4 text-skyBlue" />
              <span>View Resume</span>
            </button>

            <a
              href={personalInfo.contact.resumeDownloadPath}
              download={personalInfo.contact.resumeFileName}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-skyBlue focus:ring-offset-2 focus:ring-offset-midnight"
              aria-label="Download Resume PDF"
              title="Download PDF copy"
            >
              <Download className="w-4 h-4 text-skyBlue" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (onOpenResumeModal) {
                  onOpenResumeModal();
                } else {
                  const el = document.getElementById('qualifications') || document.getElementById('resume');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-skyBlue bg-cardNavy border border-borderNavy rounded-lg shadow-sm"
              aria-label="View Qualifications"
            >
              <Eye className="w-3.5 h-3.5 text-skyBlue" />
              <span>Resume</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-coolGray hover:text-offWhite hover:bg-cardNavy focus:outline-none focus:ring-2 focus:ring-skyBlue border border-borderNavy"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deepNavy border-b border-borderNavy px-4 pt-3 pb-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3.5 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-skyBlue bg-cardNavy font-semibold border border-borderNavy'
                      : 'text-coolGray hover:text-offWhite hover:bg-cardNavy/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-skyBlue shadow-glow-sky" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-borderNavy mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResumeModal) {
                    onOpenResumeModal();
                  } else {
                    const el = document.getElementById('qualifications') || document.getElementById('resume');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-colors"
              >
                <Eye className="w-4 h-4 text-skyBlue" />
                <span>View Resume in Portfolio</span>
              </button>
              <a
                href={personalInfo.contact.resumeDownloadPath}
                download={personalInfo.contact.resumeFileName}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-coolGray hover:text-offWhite bg-cardNavy rounded-xl border border-borderNavy transition-colors"
              >
                <Download className="w-4 h-4 text-skyBlue" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-coolGray hover:text-offWhite bg-cardNavy rounded-xl border border-borderNavy"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-skyBlue" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
