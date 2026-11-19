import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'liberation-war-museum',
    slug: 'liberation-war-museum',
    title: 'Liberation War Museum',
    subtitle: 'Full-Stack Cultural Archive & Dynamic Exhibition CMS',
    description: 'A comprehensive, high-scale digital museum platform designed to preserve and exhibit historical archives, multimedia galleries, and interactive exhibits with sub-second retrieval.',
    category: 'Museum & Cultural',
    year: '2024',
    techStack: ['Laravel', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS', 'REST API'],
    featured: true,
    isPrivate: true,
    overview: 'Engineered an end-to-end digital museum platform featuring an administrative content management system for curators, optimized multimedia streaming, dynamic exhibition timelines, and comprehensive search capabilities across thousands of historical records.',
    architecture: [
      'Modular Laravel service layer with cached repository queries for rapid archive querying',
      'React + TypeScript frontend delivering an interactive, responsive exhibition viewer',
      'Normalized relational MySQL schema with indexed multi-tag categorization',
      'Secure asset pipeline for high-resolution historical photo preservation'
    ],
    challenges: [
      'Architecting dynamic exhibition builders so non-technical curators can create custom layouts without code changes',
      'Optimizing query latency over large media indexes and historical metadata',
      'Enforcing strict role-based access control (RBAC) across archiving staff and public visitors'
    ],
    keyFeatures: [
      'Interactive historical timeline & artifact explorer',
      'Curator-facing dynamic drag-and-drop exhibition CMS',
      'High-resolution document & audio/video streaming pipeline',
      'Accessible, multilingual content presentation architecture'
    ]
  },
  {
    id: 'rrm-steel',
    slug: 'rrm-steel',
    title: 'RRM Steel Enterprise Platform',
    subtitle: 'Industrial Corporate Ecosystem & Dynamic Media Manager',
    description: 'Enterprise web platform featuring a custom WordPress-style Media Library, dynamic page widget layout engine, and an internal lead CRM architecture.',
    category: 'Enterprise Platform',
    year: '2024',
    techStack: ['Laravel', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
    featured: true,
    isPrivate: true,
    overview: 'Built a multi-faceted enterprise platform for one of Bangladesh’s leading steel manufacturers. Included an engineered in-house media manager for press releases, technical specifications, and dealer inquiries, coupled with custom page composition widgets.',
    architecture: [
      'Inertia.js bridge eliminating client-side API boilerplate while preserving SPA transitions',
      'Custom filesystem abstraction for chunked media uploads and image thumbnail transformations',
      'Eloquent relational pipeline connecting public inquiries directly into an administrative CRM pipeline'
    ],
    challenges: [
      'Building a media library comparable to WordPress with folder structures, search, and batch transformations from scratch',
      'Synchronizing industrial product catalogs with variable engineering specifications',
      'Minimizing initial load times for heavy industrial product showcases'
    ],
    keyFeatures: [
      'Custom drag-and-drop media asset manager with instant focal cropping',
      'Modular page layout composer for marketing and corporate announcements',
      'Integrated dealership inquiry & B2B procurement CRM pipeline',
      'Real-time lead notifications with administrative audit trails'
    ]
  },
  {
    id: 'gb-optimizers',
    slug: 'gb-optimizers',
    title: 'GB-Optimizers',
    subtitle: 'High-Performance Web Platform & Interactive Client Interface',
    description: 'Modern business acceleration platform engineered with precision TypeScript components, fluid micro-interactions, and high-conversion landing architecture.',
    category: 'Client Platform',
    year: '2023',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    featured: true,
    isPrivate: false,
    githubUrl: 'https://github.com/MahmudUllah111',
    overview: 'Delivered a modern, ultra-responsive digital frontend for an optimization consultancy, balancing sophisticated visual micro-interactions with razor-sharp typography and top-tier Core Web Vitals.',
    architecture: [
      'Component-driven React architecture using strict TypeScript prop contracts',
      'GPU-accelerated CSS and Framer Motion micro-interactions',
      'Zero-layout-shift responsive layout geometry across desktop and mobile viewports'
    ],
    challenges: [
      'Implementing fluid kinetic visual interactions without hurting page speed scores',
      'Establishing an intuitive data-density hierarchy for complex business offerings'
    ],
    keyFeatures: [
      'Kinetic service cards with dynamic hover states',
      'Interactive ROI calculation tool for prospective clients',
      'Sub-50ms interaction response latency across all form inputs'
    ]
  },
  {
    id: 'digital-crm',
    slug: 'digital-crm',
    title: 'Digital CRM',
    subtitle: 'Employee Data Management & Workflow Automation System',
    description: 'Custom internal CRM for workforce management, multi-department task routing, and automated attendance & leave tracking.',
    category: 'Internal Tool',
    year: '2023',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    featured: false,
    isPrivate: true,
    overview: 'Architected a centralized employee lifecycle management and workflow operations system, automating organizational approvals, attendance logs, and internal messaging pipelines.',
    architecture: [
      'Robust Laravel authentication system with departmental role hierarchies',
      'Event-driven notification triggers for task assignments and leave status changes',
      'Optimized SQL queries for payroll and attendance reporting'
    ],
    challenges: [
      'Migrating legacy spreadsheet tracking into a normalized, audited relational database',
      'Handling concurrent multi-user leave approvals with automated conflict resolution'
    ],
    keyFeatures: [
      'Departmental hierarchy visualization & personnel directory',
      'Automated leave balance computation & manager approval workflows',
      'Exportable operational analytics reports (CSV / PDF)'
    ]
  },
  {
    id: 'lavender-bakery',
    slug: 'lavender-bakery',
    title: 'Lavender Bakery',
    subtitle: 'Brand Web Experience & Interactive Product Showcase',
    description: 'Artisan culinary digital storefront showcasing gourmet menus, custom cake order inquiries, and sensory brand identity.',
    category: 'Brand Experience',
    year: '2023',
    techStack: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
    featured: false,
    isPrivate: false,
    githubUrl: 'https://github.com/MahmudUllah111',
    overview: 'Crafted a boutique digital brand platform for an upscale bakery, emphasizing aesthetic photography, categorized seasonal menus, and an intuitive custom catering request pipeline.',
    architecture: [
      'Lightweight Laravel backend managing dynamic seasonal menu releases',
      'Tactile interactive gallery with filtering by dietary preferences'
    ],
    challenges: [
      'Balancing high-resolution gourmet photography with swift mobile loading speeds',
      'Designing an intuitive order builder for custom tiered cakes'
    ],
    keyFeatures: [
      'Dynamic seasonal dessert catalog with allergen filters',
      'Interactive custom cake configuration builder',
      'Direct WhatsApp and email order dispatch integration'
    ]
  },
  {
    id: 'marketorr',
    slug: 'marketorr',
    title: 'Marketorr Platform',
    subtitle: 'Agency Digital Presence & Responsive Showcase',
    description: 'High-conversion agency web platform built for dynamic service presentations, case study highlights, and inbound client intake.',
    category: 'Client Platform',
    year: '2023',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    featured: false,
    isPrivate: true,
    overview: 'Engineered the agency web presence for Marketorr, crafting custom interactive case study layouts and lead acquisition funnels optimized for high engagement.',
    architecture: [
      'Modular component library for rapid case study page assembly',
      'Tailwind CSS design token system ensuring brand consistency'
    ],
    challenges: [
      'Creating engaging visual transitions without third-party bundle bloat',
      'Optimizing lead forms for frictionless mobile conversion'
    ],
    keyFeatures: [
      'Responsive agency portfolio showcase with category filtering',
      'Interactive client project intake form with real-time feedback',
      'Crisp typographic hierarchy and micro-animated service highlights'
    ]
  },
  {
    id: 'candi-robot',
    slug: 'candi-robot',
    title: 'CANDI Educational Robot',
    subtitle: 'Bilingual Interactive Robot Thesis Project',
    description: 'An AI-driven bilingual (Bangla & English) interactive educational robot developed as an undergraduate capstone thesis at Independent University, Bangladesh.',
    category: 'Thesis & Robotics',
    year: '2022',
    techStack: ['Python', 'Robotics', 'Speech Recognition', 'Embedded Systems', 'AI'],
    featured: true,
    isPrivate: false,
    githubUrl: 'https://github.com/MahmudUllah111',
    overview: 'Engineered an interactive humanoid educational companion capable of real-time conversational assistance, speech recognition in both Bangla and English, facial expression cues, and child-friendly educational drills.',
    architecture: [
      'Bilingual Natural Language Processing pipeline integrated with speech-to-text engines',
      'Embedded microcontroller integration controlling servo motor kinematics and LED matrix expressions',
      'Computer vision layer for user tracking and gaze alignment'
    ],
    challenges: [
      'Implementing low-latency Bangla speech recognition and phonetic synthesis on edge hardware',
      'Coordinating physical mechanical servo actuation smoothly with auditory speech outputs'
    ],
    keyFeatures: [
      'Real-time bilingual conversational dialogue engine (Bangla/English)',
      'Kinematic head and arm gestures synchronized with audio synthesis',
      'Interactive quiz and visual flashcard learning games for children'
    ]
  }
];
