export const MY_RESUME = {
  personal: {
    name: 'Diogo Nogueira',
    role: {
      pt: 'Desenvolvedor Full Stack Sênior',
      en: 'Senior Full Stack Developer',
    },

    email: 'SEU_EMAIL',
    phone: 'SEU_TELEFONE',

    location: {
      pt: 'Brasil',
      en: 'Brazil',
    },

    social: {
      github: 'https://github.com/SEU_USUARIO',
      linkedin: 'https://www.linkedin.com/in/SEU_USUARIO',
    },
  },

  resume: {
    cvPath: 'assets/cv/diogo-nogueira-cv.pdf',
  },

  metrics: {
    yearsExperience: '10+',
    technologies: '20+',
    problemsSolved: '∞',
  },

  technologies: {
    frontend: ['Angular', 'TypeScript', 'React', 'Vue', 'Ionic', 'Tailwind CSS'],

    backend: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Firebase'],

    cloud: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],

    database: ['PostgreSQL', 'Firestore', 'SQLite', 'Redis'],
  },

  experience: [
    {
      period: {
        pt: '2024 — Atualmente',
        en: '2024 — Present',
      },

      company: 'Company Name',

      role: {
        pt: 'Desenvolvedor Full Stack Sênior',
        en: 'Senior Full Stack Developer',
      },

      description: {
        pt: 'Desenvolvimento de aplicações web e mobile, APIs, integrações e soluções escaláveis.',
        en: 'Development of web and mobile applications, APIs, integrations and scalable solutions.',
      },
    },

    {
      period: {
        pt: '2021 — 2024',
        en: '2021 — 2024',
      },

      company: 'Company Name',

      role: {
        pt: 'Desenvolvedor Full Stack',
        en: 'Full Stack Developer',
      },

      description: {
        pt: 'Desenvolvimento de produtos digitais utilizando tecnologias modernas de frontend e backend.',
        en: 'Development of digital products using modern frontend and backend technologies.',
      },
    },
  ],

  projects: [
    {
      name: 'Project One',

      description: {
        pt: 'Descrição do projeto e do problema que ele resolve.',
        en: 'Project description and the problem it solves.',
      },

      technologies: ['Angular', 'Node.js', 'Firebase'],

      url: '#',
    },

    {
      name: 'Project Two',

      description: {
        pt: 'Aplicação desenvolvida para solucionar um problema específico.',
        en: 'Application built to solve a specific problem.',
      },

      technologies: ['Ionic', 'Angular', 'Node.js'],

      url: '#',
    },

    {
      name: 'Project Three',

      description: {
        pt: 'Sistema completo envolvendo frontend, backend e infraestrutura.',
        en: 'Complete system involving frontend, backend and infrastructure.',
      },

      technologies: ['Angular', 'TypeScript', 'AWS'],

      url: '#',
    },
  ],
} as const;
