import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Certification } from '../data/portfolioData';
import {
  Award,
  CheckCircle2,
  Cloud,
  ShieldCheck,
  Brain,
  Cpu,
  Bookmark,
  Building,
  Calendar,
  KeyRound,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cloud & Data',
    'Cybersecurity',
    'AI & Machine Learning',
    'IT Fundamentals',
    'General',
  ];

  const filteredCerts =
    activeCategory === 'All'
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (category: Certification['category']) => {
    switch (category) {
      case 'Cloud & Data':
        return <Cloud className="w-5 h-5 text-skyBlue" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'AI & Machine Learning':
        return <Brain className="w-5 h-5 text-violet-400" />;
      case 'IT Fundamentals':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Bookmark className="w-5 h-5 text-royalBlue" />;
    }
  };

  const getCategoryAccent = (category: Certification['category']): string => {
    switch (category) {
      case 'Cloud & Data':        return 'text-skyBlue bg-skyBlue/10 border-skyBlue/20';
      case 'Cybersecurity':       return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'AI & Machine Learning': return 'text-violet-400 bg-violet-400/10 border-violet-400/20';
      case 'IT Fundamentals':     return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default:                    return 'text-royalBlue bg-royalBlue/10 border-royalBlue/30';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-midnight border-t border-borderNavy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royalBlue/10 border border-royalBlue/30 text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-offWhite tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-12 h-1 bg-royalBlue mx-auto rounded-full mt-3 mb-4" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Industry certificates completed across Cloud Engineering, Cybersecurity, Machine Learning, and IT Fundamentals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-skyBlue/50 ${
                activeCategory === category
                  ? 'bg-royalBlue text-white shadow-glow-blue'
                  : 'bg-cardNavy text-coolGray hover:text-offWhite hover:border-borderNavy border border-borderNavy'
              }`}
            >
              {category}
              {category === 'All' && ` (${certifications.length})`}
            </button>
          ))}
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-cardNavy rounded-2xl p-6 border border-borderNavy hover:border-royalBlue/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Icon + Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${getCategoryAccent(cert.category)}`}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${getCategoryAccent(cert.category)}`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-offWhite text-base leading-snug mb-3 group-hover:text-skyBlue transition-colors">
                  {cert.title}
                </h3>

                {/* Meta Info */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-coolGray font-medium">
                    <Building className="w-3.5 h-3.5 text-mutedGray shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-mutedGray">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>Completed: {cert.year}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-skyBlue bg-skyBlue/5 border border-skyBlue/20 px-2.5 py-1 rounded-lg mt-1.5">
                      <KeyRound className="w-3 h-3 shrink-0" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-4 border-t border-borderNavy flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                <span className="font-mono text-mutedGray">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
