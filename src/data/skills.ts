import { SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Kinetic, accessible, and reactive user interfaces built with modern component architecture.',
    skills: [
      { name: 'React', description: 'Component architecture, hooks, state machines, server components', primary: true },
      { name: 'TypeScript', description: 'Strict typing, generic interfaces, compile-time safety', primary: true },
      { name: 'Vue.js', description: 'Composition API, reactive systems, single-file components', primary: false },
      { name: 'Inertia.js', description: 'Monolithic simplicity with modern SPA client-side routing', primary: true },
      { name: 'Tailwind CSS', description: 'Utility-first tokens, custom theme scales, responsive layout', primary: true },
      { name: 'GSAP', description: 'ScrollTrigger choreography, timeline scrub, pin mechanics', primary: true },
      { name: 'Framer Motion', description: 'Spring physics, layout transitions, gesture physics', primary: true },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    subtitle: 'Robust server architecture, relational schema design, and performant RESTful APIs.',
    skills: [
      { name: 'Laravel', description: 'Service providers, Eloquent ORM, event pipelines, queues', primary: true },
      { name: 'PHP', description: 'Modern PHP 8+, type systems, object-oriented design patterns', primary: true },
      { name: 'REST APIs', description: 'Resource controllers, JWT/Sanctum auth, rate-limiting', primary: true },
      { name: 'Filament', description: 'Rapid administrative dashboard engines & custom table builders', primary: false },
      { name: 'MySQL / MariaDB', description: 'Schema normalization, complex joins, indexing, query optimization', primary: true },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Systems',
    subtitle: 'Developer ergonomics, test automation, and intelligent engineering pipelines.',
    skills: [
      { name: 'Git & GitHub', description: 'Branch management, CI/CD actions, peer review workflows', primary: true },
      { name: 'Linux', description: 'Shell scripting, server management, daemon orchestration', primary: true },
      { name: 'Vite', description: 'Instant HMR, rollup configuration, asset optimization', primary: true },
      { name: 'AI Workflows', description: 'Agentic development, prompt orchestration, automated testing', primary: true },
      { name: 'Playwright', description: 'End-to-end browser testing, visual regression prevention', primary: false },
    ]
  }
];

export const ALL_SKILLS_LIST = [
  'React', 'TypeScript', 'Laravel', 'PHP', 'Inertia.js', 'Tailwind CSS',
  'GSAP', 'Framer Motion', 'MySQL', 'REST APIs', 'Vite', 'Git',
  'Vue.js', 'Filament', 'Linux', 'Playwright', 'Embedded AI'
];
