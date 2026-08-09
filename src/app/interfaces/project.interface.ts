export interface Project {
  name: string;

  description: {
    pt: string;
    en: string;
  };

  technologies: string[];

  url?: string;

  status?: 'completed' | 'in-progress';
}
