import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  Database,
  Cpu,
  Wrench,
  Binary,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-skyBlue" />;
      case 'Database':
        return <Database className="w-5 h-5 text-skyBlue" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-skyBlue" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-skyBlue" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-skyBlue" />;
      default:
        return <Layers className="w-5 h-5 text-skyBlue" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-midnight text-offWhite border-t border-borderNavy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cardNavy border border-borderNavy text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-skyBlue" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offWhite tracking-tight font-sans">
            Technical Skills
          </h2>
          <div className="w-14 h-1 bg-royalBlue mx-auto rounded-full mt-3.5 mb-4 shadow-glow-blue" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Directly extracted from academic curriculum, practical projects, and industry internship training.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-cardNavy rounded-2xl p-6 sm:p-7 border border-borderNavy shadow-card hover:border-skyBlue/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-deepNavy border border-borderNavy flex items-center justify-center group-hover:border-skyBlue/50 transition-colors">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-offWhite text-base leading-snug group-hover:text-skyBlue transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-mutedGray mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges / Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-deepNavy hover:bg-cardNavy border border-borderNavy hover:border-skyBlue/50 text-coolGray hover:text-offWhite text-xs font-medium transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-skyBlue" />
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-royalBlue/20 text-skyBlue border border-royalBlue/30 ml-1">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="pt-4 mt-5 border-t border-borderNavy/70 flex items-center justify-between text-[11px] text-mutedGray">
                <span>Verified Curriculum Skill</span>
                <span className="font-mono text-skyBlue font-semibold">{cat.skills.length} {cat.skills.length === 1 ? 'Item' : 'Items'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency & Accuracy */}
        <div className="mt-12 bg-cardNavy border border-borderNavy rounded-xl p-4 text-center max-w-2xl mx-auto text-xs text-mutedGray shadow-sm">
          <span className="font-semibold text-offWhite">Transparency Note:</span> Skills listed strictly reflect verified course modules, internship technologies, and project implementations without arbitrary proficiency scores or unverified technologies.
        </div>
      </div>
    </section>
  );
};
