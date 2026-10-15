import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home',           href: '#home' },
    { label: 'About',          href: '#about' },
    { label: 'Skills',         href: '#skills' },
    { label: 'Education',      href: '#education' },
    { label: 'Experience',     href: '#experience' },
    { label: 'Projects',       href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Resume',         href: '#resume' },
    { label: 'Contact',        href: '#contact' },
  ];

  return (
    <footer className="bg-midnight border-t border-borderNavy text-mutedGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row: Logo + Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-borderNavy">

          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 text-offWhite font-bold text-lg">
              <Code2 className="w-5 h-5 text-skyBlue" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-mutedGray max-w-sm">
              Aspiring IT Professional &amp; Computer Science Engineer | Python &amp; Applied Machine Learning
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-cardNavy hover:bg-deepNavy text-coolGray hover:text-offWhite border border-borderNavy hover:border-offWhite/30 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-cardNavy hover:bg-deepNavy text-coolGray hover:text-skyBlue border border-borderNavy hover:border-skyBlue/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-xl bg-cardNavy hover:bg-deepNavy text-coolGray hover:text-royalBlue border border-borderNavy hover:border-royalBlue/40 transition-all"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="py-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-mutedGray hover:text-offWhite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-mutedGray pt-4 border-t border-borderNavy/50 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          <span className="hidden sm:inline text-borderNavy">•</span>
          <span>Crafted with React, TypeScript &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
