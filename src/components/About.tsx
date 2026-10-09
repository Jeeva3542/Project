import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Award,
  Layers,
  CheckCircle,
  Lightbulb,
  HeartHandshake,
  Compass,
} from 'lucide-react';

export const About: React.FC = () => {
  const { personalInfo, softSkills, areasOfInterest, academicRecognition } = portfolioData;

  return (
    <section id="about" className="py-24 bg-deepNavy text-offWhite border-t border-borderNavy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cardNavy border border-borderNavy text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            About Me
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Final-year Computer Science & Engineering undergraduate focused on practical software development, data handling, and applied machine learning.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Natural Bio & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-cardNavy border border-borderNavy rounded-2xl p-6 sm:p-7 shadow-card hover:border-skyBlue/40 transition-all">
              <h3 className="text-lg font-bold text-offWhite mb-3 flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-skyBlue" />
                <span>Career Objective</span>
              </h3>
              <p className="text-coolGray leading-relaxed font-medium italic border-l-4 border-royalBlue pl-4 py-1">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            <div className="space-y-4 text-coolGray text-base leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Areas of Interest */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-mutedGray mb-3.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-skyBlue" />
                <span>Areas of Interest</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {areasOfInterest.map((interest, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-cardNavy border border-borderNavy hover:border-skyBlue/50 transition-all shadow-sm"
                  >
                    <div className="font-bold text-offWhite text-sm">{interest.name}</div>
                    <div className="text-xs text-mutedGray mt-1 leading-relaxed">{interest.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-mutedGray mb-3.5 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-skyBlue" />
                <span>Key Strengths & Interpersonal Skills</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cardNavy text-coolGray text-xs font-medium border border-borderNavy hover:border-skyBlue/50 hover:text-offWhite transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-skyBlue" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Structured Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Education Snapshot */}
            <div className="p-6 rounded-2xl bg-cardNavy border border-borderNavy shadow-card hover:border-skyBlue/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-skyBlue uppercase tracking-wider">
                    Degree & Specialization
                  </span>
                  <h4 className="text-base font-bold text-offWhite mt-0.5">
                    B.E. Computer Science & Engineering
                  </h4>
                  <p className="text-sm text-coolGray mt-1">
                    Er. Perumal Manimekalai College of Engineering, Hosur
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-deepNavy border border-borderNavy text-xs font-semibold text-coolGray">
                    <span>Batch: 2023 – 2027</span>
                    <span>•</span>
                    <span className="text-skyBlue font-mono font-bold">CGPA: 7.53*</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Industry Internship Experience */}
            <div className="p-6 rounded-2xl bg-cardNavy border border-borderNavy shadow-card hover:border-skyBlue/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-skyBlue uppercase tracking-wider">
                    Practical Exposure
                  </span>
                  <h4 className="text-base font-bold text-offWhite mt-0.5">
                    Python Industry Internships
                  </h4>
                  <ul className="text-sm text-coolGray mt-2 space-y-1.5 list-disc list-inside">
                    <li>Growwpark Technologies (Hosur) – Jun 2026</li>
                    <li>Apollo Computer Education (Krishnagiri) – Jul 2025</li>
                  </ul>
                  <p className="text-xs text-mutedGray mt-2">
                    Focused on OOP, data structures, debugging, and database connectivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Academic Competition Recognition */}
            <div className="p-6 rounded-2xl bg-cardNavy border border-borderNavy shadow-card hover:border-skyBlue/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-skyBlue uppercase tracking-wider">
                    Academic Recognition
                  </span>
                  <h4 className="text-base font-bold text-offWhite mt-0.5">
                    {academicRecognition.achievement}
                  </h4>
                  <p className="text-sm text-coolGray font-medium mt-1">
                    {academicRecognition.title}
                  </p>
                  <p className="text-xs text-mutedGray mt-0.5">
                    {academicRecognition.organization} ({academicRecognition.date})
                  </p>
                  <p className="text-xs text-coolGray mt-2.5 bg-deepNavy border border-borderNavy p-2.5 rounded-xl">
                    Competed among engineering students in core CS and IT technical trivia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
