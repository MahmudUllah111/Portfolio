import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sk-it-centre',
    role: 'Developer',
    company: 'SK IT Centre',
    location: 'Dhaka, Bangladesh',
    period: '2023 — Present',
    type: 'Work',
    description: 'Leading development of enterprise digital CRM architectures, internal workflow tools, and computer vision / image detection modules for corporate clients.',
    highlights: [
      'Architected end-to-end custom CRM systems automating workforce tracking and operational routing for commercial clients.',
      'Integrated image detection and automated media tagging pipelines, increasing classification throughput by over 40%.',
      'Engineered normalized database schemas and REST APIs handling multi-tenant corporate data securely.'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Python', 'Computer Vision', 'REST APIs', 'Git']
  },
  {
    id: 'marketorr',
    role: 'Web Developer',
    company: 'Marketorr',
    location: 'Dhaka, Bangladesh',
    period: '2022 — 2023',
    type: 'Work',
    description: 'Engineered high-performance full-stack web applications, dynamic client portals, and bespoke content management architectures.',
    highlights: [
      'Developed tailored CMS platforms giving non-technical client teams effortless control over layout blocks and media assets.',
      'Built responsive, high-conversion web frontends using modern JavaScript, React, and Tailwind CSS.',
      'Collaborated directly with UI/UX designers to translate Figma prototypes into pixel-perfect, accessible code.'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Laravel', 'Inertia.js', 'Vite']
  },
  {
    id: 'iub-cse',
    role: 'B.Sc. in Computer Science & Engineering',
    company: 'Independent University, Bangladesh (IUB)',
    location: 'Dhaka, Bangladesh',
    period: 'Graduated',
    type: 'Education',
    description: 'Specialized in Systems Architecture, Software Engineering, Algorithms, and Robotics / Artificial Intelligence.',
    highlights: [
      'Capstone Thesis: Engineered CANDI — a bilingual Bangla/English interactive educational robot combining NLP and embedded systems.',
      'Rigorous foundation in data structures, relational database engineering, software lifecycle, and distributed computing.',
      'Active participant in university tech symposiums, algorithmic problem solving, and open-source hackathons.'
    ],
    technologies: ['Algorithms', 'Data Structures', 'Database Systems', 'AI & Robotics', 'C++', 'Python']
  }
];
