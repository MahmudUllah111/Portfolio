import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'enterprise') return p.category === 'Enterprise Platform' || p.category === 'Museum & Cultural';
    if (filter === 'client') return p.category === 'Client Platform' || p.category === 'Brand Experience' || p.category === 'Internal Tool';
    if (filter === 'robotics') return p.category === 'Thesis & Robotics';
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Case Studies &amp; Architectural Work</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-typography-primary">
            Featured Projects
          </h2>
          <p className="text-typography-secondary text-base md:text-lg max-w-xl">
            A curated showcase of production museum platforms, enterprise corporate architectures, and bilingual robotics thesis research.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-obsidian-surface border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'enterprise', label: 'Enterprise & Museum' },
            { id: 'client', label: 'Client Platforms' },
            { id: 'robotics', label: 'AI & Robotics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-tight transition-all duration-200 whitespace-nowrap ${
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
