export interface Experience {
  period: {
    pt: string;
    en: string;
  };

  company: string;
  companyUrl?: string;

  location: {
    pt: string;
    en: string;
  };

  role: {
    pt: string;
    en: string;
  };

  description: {
    pt: string;
    en: string;
  };

  technologies: string[];
}
