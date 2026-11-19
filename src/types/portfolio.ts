export type ProjectCategory = 
  | 'Museum & Cultural'
  | 'Enterprise Platform'
  | 'Client Platform'
  | 'Internal Tool'
  | 'Brand Experience'
  | 'Thesis & Robotics';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  year: string;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  isPrivate: boolean;
  overview: string;
  architecture: string[];
  challenges: string[];
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Work' | 'Education';
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    description: string;
    primary?: boolean;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
