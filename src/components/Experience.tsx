import React from 'react';
import { portfolioData } from '../data/portfolioData';
import type { VerifiedCertificate } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Building2,
  Eye,
  FileCheck,
} from 'lucide-react';

interface ExperienceProps {
  onSelectCertificate?: (cert: VerifiedCertificate) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectCertificate }) => {
  const { internships, verifiedCertificates } = portfolioData;

  const getMatchedCertificate = (internshipId: string): VerifiedCertificate | undefined => {
    if (internshipId === 'growwpark') return verifiedCertificates.find((c) => c.id === 'cert-growwpark');
    if (internshipId === 'apollo') return verifiedCertificates.find((c) => c.id === 'cert-apollo');
    if (internshipId === 'vei-workshop') return verifiedCertificates.find((c) => c.id === 'cert-vei-workshop');
    return undefined;
  };

  return (
    <section id="experience" className="py-24 bg-midnight text-offWhite border-t border-borderNavy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cardNavy border border-borderNavy text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-skyBlue" />
            <span>Industrial Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            Internships &amp; Practical Training
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Hands-on technical development exposure in professional software engineering and training environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship) => {
            const cert = getMatchedCertificate(internship.id);

            return (
              <div
                key={internship.id}
                className="bg-cardNavy rounded-2xl p-6 sm:p-8 border border-borderNavy shadow-card hover:border-skyBlue/50 hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 border-b border-borderNavy/60">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
                        {internship.type}
                      </span>
                      {cert && (
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Certificate Verified
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-offWhite group-hover:text-skyBlue transition-colors">
                      {internship.title}
                    </h3>
                    <div className="flex items-center gap-2 text-skyBlue font-semibold text-sm">
                      <Building2 className="w-4 h-4 text-skyBlue" />
                      <span>{internship.organization}</span>
                    </div>
                  </div>

                  {/* Date & Location Pill */}
                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-mutedGray">
                    <span className="inline-flex items-center gap-1.5 font-medium px-3 py-1 rounded-lg bg-deepNavy border border-borderNavy text-coolGray">
                      <Calendar className="w-3.5 h-3.5 text-skyBlue" />
                      <span>{internship.duration}</span>
                    </span>
                    {internship.location && (
                      <span className="inline-flex items-center gap-1 text-mutedGray">
                        <MapPin className="w-3.5 h-3.5 text-skyBlue" />
                        <span>{internship.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-mutedGray">
                    Key Responsibilities &amp; Practical Learning:
                  </h4>
                  <ul className="space-y-2.5">
                    {internship.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-coolGray leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Learned & Action Footer */}
                <div className="mt-6 pt-5 border-t border-borderNavy/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-mutedGray uppercase tracking-wider">
                      <Cpu className="w-3.5 h-3.5 text-skyBlue" />
                      <span>Skills &amp; Technologies Practiced:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologiesLearned.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-deepNavy border border-borderNavy text-coolGray text-xs font-medium hover:border-skyBlue/40 hover:text-offWhite transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button (if certificate exists) */}
                  {cert && (
                    <div className="shrink-0 pt-2 sm:pt-0">
                      <button
                        type="button"
                        onClick={() => onSelectCertificate && onSelectCertificate(cert)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all"
                        title="View official completion certificate"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-skyBlue" />
                        <span>View Certificate</span>
                        <Eye className="w-3.5 h-3.5 opacity-80" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
