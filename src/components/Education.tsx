import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-deepNavy text-offWhite border-t border-borderNavy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cardNavy border border-borderNavy text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            Education Timeline
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Formal education credentials from undergraduate engineering to secondary schooling.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute top-6 bottom-6 left-8 w-0.5 bg-borderNavy" />

          <div className="space-y-8">
            {education.map((item) => {
              const isBE = item.id === 'be-cse';
              return (
                <div
                  key={item.id}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div
                    className={`hidden md:flex absolute left-4 top-4 -translate-x-1/2 w-9 h-9 rounded-full border-2 items-center justify-center transition-all ${
                      isBE
                        ? 'bg-royalBlue border-skyBlue text-white shadow-glow-blue'
                        : 'bg-cardNavy border-borderNavy text-coolGray group-hover:border-skyBlue group-hover:text-skyBlue'
                    }`}
                  >
                    {isBE ? <GraduationCap className="w-4 h-4 text-skyBlue" /> : <BookOpen className="w-4 h-4" />}
                  </div>

                  {/* Education Card */}
                  <div
                    className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                      isBE
                        ? 'bg-cardNavy border-borderNavy hover:border-skyBlue/60 shadow-card hover:shadow-card-hover'
                        : 'bg-cardNavy border-borderNavy hover:border-skyBlue/40 shadow-card'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        {item.boardOrAffiliation && (
                          <span className="inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-deepNavy border border-borderNavy text-mutedGray mb-2">
                            {item.boardOrAffiliation}
                          </span>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold text-offWhite leading-snug group-hover:text-skyBlue transition-colors">
                          {item.degree}
                        </h3>
                        <div className="text-sm font-semibold text-skyBlue mt-1">
                          {item.institution}
                        </div>
                      </div>

                      {/* Grade Badge */}
                      <div className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-deepNavy border border-borderNavy text-offWhite font-mono text-xs font-bold shadow-sm whitespace-nowrap">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.gradeLabel}: <span className="text-skyBlue">{item.grade}</span></span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-mutedGray mb-4 pb-3 border-b border-borderNavy/60">
                      <span className="inline-flex items-center gap-1.5 font-medium text-coolGray">
                        <Calendar className="w-3.5 h-3.5 text-skyBlue" />
                        <span>{item.year}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-skyBlue" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <p className="text-sm text-coolGray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
