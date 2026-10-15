import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Certification, VerifiedCertificate } from '../data/portfolioData';
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
  Eye,
  FileCheck,
  Sparkles,
  ExternalLink,
  Download,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

interface CertificationsProps {
  onSelectCertificate?: (cert: VerifiedCertificate) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCertificate }) => {
  const { certifications, verifiedCertificates } = portfolioData;
  const [activeTab, setActiveTab] = useState<'verified' | 'all'>('verified');
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
      case 'Cloud & Data':
        return 'text-skyBlue bg-skyBlue/10 border-skyBlue/20';
      case 'Cybersecurity':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'AI & Machine Learning':
        return 'text-violet-400 bg-violet-400/10 border-violet-400/20';
      case 'IT Fundamentals':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default:
        return 'text-royalBlue bg-royalBlue/10 border-royalBlue/30';
    }
  };

  const getVerifiedCertIcon = (category: VerifiedCertificate['category']) => {
    switch (category) {
      case 'Internship':
        return <Briefcase className="w-5 h-5 text-skyBlue" />;
      case 'Competition & Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Workshop':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      default:
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-midnight border-t border-borderNavy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royalBlue/10 border border-royalBlue/30 text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Verifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            Certifications &amp; Credentials
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Verified internship credentials, competition awards, technical workshops, and professional industry certifications.
          </p>

          {/* Section Mode Toggle: Official Documents vs All Industry Credentials */}
          <div className="inline-flex items-center bg-cardNavy p-1 rounded-xl border border-borderNavy mt-6 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('verified')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'verified'
                  ? 'bg-royalBlue text-white shadow-glow-blue'
                  : 'text-coolGray hover:text-offWhite'
              }`}
            >
              <FileCheck className="w-4 h-4 text-skyBlue" />
              <span>Verified Certificates ({verifiedCertificates.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-royalBlue text-white shadow-glow-blue'
                  : 'text-coolGray hover:text-offWhite'
              }`}
            >
              <Award className="w-4 h-4 text-skyBlue" />
              <span>Industry Certifications ({certifications.length})</span>
            </button>
          </div>
        </div>

        {/* 1. Official Verified Certificates (Clean View Section without bulky permanent inline images) */}
        {activeTab === 'verified' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-mutedGray px-1">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-skyBlue" />
                <span>Click <strong>"View Certificate"</strong> on any credential to inspect the verified original document in full detail.</span>
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-emerald-400 bg-cardNavy px-2.5 py-1 rounded-lg border border-borderNavy">
                ✓ 4 Verified Documents Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {verifiedCertificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-cardNavy rounded-2xl p-6 sm:p-7 border border-borderNavy hover:border-royalBlue/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header Row: Category Icon + Badges */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-deepNavy border border-borderNavy/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-skyBlue/40 transition-colors">
                          {getVerifiedCertIcon(cert.category)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
                              {cert.badge}
                            </span>
                          </div>
                          <span className="text-xs text-coolGray font-semibold block mt-1">
                            {cert.organization}
                          </span>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-deepNavy border border-emerald-500/30 text-[11px] font-medium text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <div>
                      <h3 className="font-bold text-offWhite text-lg leading-snug group-hover:text-skyBlue transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-coolGray mt-2 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-deepNavy border border-borderNavy text-[11px] font-mono text-mutedGray"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Date & Interactive View Action */}
                  <div className="mt-6 pt-4 border-t border-borderNavy/70 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-mutedGray">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{cert.duration || cert.issueDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectCertificate && onSelectCertificate(cert)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all hover:-translate-y-0.5"
                        title="Click to view full certificate image"
                      >
                        <Eye className="w-3.5 h-3.5 text-skyBlue" />
                        <span>View Certificate</span>
                      </button>

                      <a
                        href={cert.image}
                        download={`${cert.id}.jpg`}
                        className="p-2 rounded-xl bg-deepNavy hover:bg-cardNavy text-coolGray hover:text-offWhite border border-borderNavy transition-colors"
                        title="Download certificate image"
                      >
                        <Download className="w-3.5 h-3.5 text-skyBlue" />
                      </a>

                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-deepNavy hover:bg-cardNavy text-coolGray hover:text-offWhite border border-borderNavy transition-colors"
                        title="Open raw image in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-skyBlue" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Industry & Course Credentials Grid */}
        {activeTab === 'all' && (
          <div>
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
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center ${getCategoryAccent(
                          cert.category
                        )}`}
                      >
                        {getCategoryIcon(cert.category)}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${getCategoryAccent(
                          cert.category
                        )}`}
                      >
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
        )}
      </div>
    </section>
  );
};
