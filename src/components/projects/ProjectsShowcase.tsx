import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { FeaturedSpotlightCard } from './FeaturedSpotlightCard';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const spotlightProject = PROJECTS[0]; // Liberation War Museum
  const otherProjects = PROJECTS.slice(1); // The remaining 6 projects

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'enterprise') return p.category === 'Enterprise Platform' || p.category === 'Museum & Cultural';
    if (filter === 'client') return p.category === 'Client Platform' || p.category === 'Brand Experience' || p.category === 'Internal Tool';
    if (filter === 'robotics') return p.category === 'Thesis & Robotics';
    return true;
  });

  return (
    <section id="work" className="py-28 md:py-36 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-12">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-typography-muted font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>03 // SELECTED WORK &amp; CASE STUDIES</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-tight text-typography-primary uppercase">
            Featured Projects
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-obsidian-surface border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All Projects (7)' },
            { id: 'enterprise', label: 'Enterprise & Museum' },
            { id: 'client', label: 'Client Platforms' },
            { id: 'robotics', label: 'Robotics & AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? 'bg-typography-primary text-obsidian font-semibold shadow-inner'
                  : 'text-typography-secondary hover:text-typography-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* When viewing "all", render the full-width Spotlight Card + 2-Column Grid for remaining 6 */}
      {filter === 'all' ? (
        <div className="w-full">
          {/* Flagship Spotlight Card (Liberation War Museum) */}
          <FeaturedSpotlightCard project={spotlightProject} onSelect={setSelectedProject} />

          {/* Balanced 2-Column Grid for the 6 remaining projects (3 rows of 2, 0 orphans) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* Filtered View: Clean 2-column grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Deep Dive Case Study Slide-over Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
