import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { ExperienceItem } from '../../types/portfolio';
import { DoubleBezelCard } from '../common/DoubleBezelCard';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
  const isEducation = item.type === 'Education';

  return (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
      {/* Node Dot on the timeline spine */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-obsidian-surface border-2 border-accent-cyan flex items-center justify-center shadow-glow-cyan z-10 transition-transform duration-300 group-hover:scale-125">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
      </div>

      <DoubleBezelCard>
        <div className="flex flex-col gap-4">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
            <div className="flex items-center gap-2.5">
              <span
                className={`p-1.5 rounded-lg border ${
                  isEducation
                    ? 'bg-accent-indigo/10 border-accent-indigo/20 text-accent-indigo'
                    : 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan'
                }`}
              >
                {isEducation ? (
                  <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                )}
              </span>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl text-typography-primary">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-accent-cyan">
                  {item.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-typography-muted self-start sm:self-auto">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                {item.period}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-typography-secondary leading-relaxed">
            {item.description}
          </p>

          {/* Bullet Highlights */}
          <div className="space-y-2.5 pt-2">
            {item.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-typography-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          {item.technologies && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 font-mono text-xs text-typography-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </DoubleBezelCard>
    </div>
  );
};
