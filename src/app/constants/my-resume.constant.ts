import { Experience } from '../interfaces/experience.interface';
import { Project } from '../interfaces/project.interface';

export const MY_RESUME = {
  personal: {
    name: 'Diogo Nogueira',

    role: {
      pt: 'Desenvolvedor Full Stack Sênior',
      en: 'Senior Full Stack Developer',
    },

    summary: {
      pt: 'Desenvolvedor Full Stack com sólida experiência na construção de interfaces web e aplicações móveis modernas, utilizando React, Vue.js, Angular e Node.js. Atuação em todo o ciclo de desenvolvimento — do design à entrega — com foco em código limpo, arquitetura escalável, integração de APIs RESTful e colaboração próxima com times multidisciplinares.',

      en: 'Full Stack Developer with solid experience building modern web interfaces and mobile applications using React, Vue.js, Angular and Node.js. Experienced across the entire development lifecycle — from design to delivery — with a focus on clean code, scalable architecture, RESTful API integration and close collaboration with multidisciplinary teams.',
    },

    email: 'dsnogueira489@gmail.com',

    phone: '+55 (14) 99104-2005',

    whatsapp: '+5514991042005',

    location: {
      pt: 'Bauru, SP — Brasil',
      en: 'Bauru, SP — Brazil',
    },

    social: {
      linkedin: 'https://www.linkedin.com/in/ds-nogueira/',
      github: 'https://github.com/Diog0-0',
    },
  },

  resume: {
    cvPath: '/assets/cv/diogo-nogueira-cv.pdf',
  },

  metrics: {
    yearsExperience: '4+',
    technologies: '20+',
    problemsSolved: '∞',
  },

  technologies: {
    frontend: ['Angular', 'React', 'Vue.js', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],

    backend: ['Node.js', 'NestJS', 'RESTful APIs', 'Python', 'Firebase Functions', 'LLMs'],

    cloud: [
      'AWS',
      'EC2',
      'S3',
      'Google Cloud',
      'Firebase',
      'DigitalOcean',
      'Docker',
      'CapRover',
      'CI/CD',
    ],

    database: ['SQL', 'NoSQL', 'PostgreSQL', 'Redis'],

    practices: [
      'Git',
      'Clean Code',
      'Clean Architecture',
      'API Integrations',
      'Payment Gateways',
      'Push Notifications',
    ],
  },

  experience: [
    {
      period: {
        pt: '06/2024 — Presente',
        en: '06/2024 — Present',
      },

      company: 'Be220',
      companyUrl: 'https://be220.com.br/',

      location: {
        pt: 'Porto Alegre, RS',
        en: 'Porto Alegre, RS, Brazil',
      },

      role: {
        pt: 'Desenvolvedor Full Stack Sênior',
        en: 'Senior Full Stack Developer',
      },

      description: {
        pt: 'Atuação na unidade responsável pelo desenvolvimento de novos sistemas, conduzindo projetos greenfield de forma autônoma, desde a concepção até a entrega do MVP. Responsável por transformar requisitos de negócio em soluções técnicas, definindo arquitetura, modelagem de dados, integrações, serviços, estratégias de cache e organização do código. Desenvolvimento de aplicações web, mobile e PWA com Angular, Ionic, Capacitor, TypeScript e React, além de APIs e serviços backend com Node.js. Arquitetura e implementação de soluções utilizando Firebase, Cloud Firestore e Google Cloud Platform, incluindo Cloud Run, Cloud Functions, Cloud Storage, Pub/Sub, Cloud Scheduler e Secret Manager, com pipelines de CI/CD. Desenvolvimento de integrações com gateways de pagamento como Asaas e Pagar.me, além de soluções de mensageria e processamento assíncrono. Comunicação direta com clientes para levantamento de requisitos e definição de soluções, participação na definição de padrões e boas práticas para novos projetos e decisões de arquitetura e engenharia por meio do comitê de qualidade. Experiência também com sustentação e resolução de problemas em produção.',

        en: 'Work within the unit responsible for developing new systems, autonomously leading greenfield projects from conception to MVP delivery. Responsible for translating business requirements into technical solutions, defining architecture, data modeling, integrations, services, caching strategies and code organization. Development of web, mobile and PWA applications using Angular, Ionic, Capacitor, TypeScript and React, as well as backend APIs and services with Node.js. Architecture and implementation of solutions using Firebase, Cloud Firestore and Google Cloud Platform, including Cloud Run, Cloud Functions, Cloud Storage, Pub/Sub, Cloud Scheduler and Secret Manager, with CI/CD pipelines. Development of integrations with payment gateways such as Asaas and Pagar.me, as well as messaging and asynchronous processing solutions. Direct communication with clients for requirements gathering and solution definition, participation in defining standards and best practices for new projects, and involvement in architecture and engineering decisions through the company quality committee. Experience with production support and troubleshooting.',
      },

      technologies: [
        'Angular',
        'Node.js',
        'Ionic',
        'Firebase',
        'Google Cloud',
        'TypeScript',
        'Payment Gateways',
        'AI & Automation',
      ],
    },

    {
      period: {
        pt: '12/2022 — 07/2024',
        en: '12/2022 — 07/2024',
      },

      company: 'Outra Coisa',
      companyUrl: 'https://outracoisa.co/',

      location: {
        pt: 'Rio de Janeiro, RJ',
        en: 'Rio de Janeiro, RJ, Brazil',
      },

      role: {
        pt: 'Desenvolvedor Full Stack Pleno',
        en: 'Mid-Level Full Stack Developer',
      },

      description: {
        pt: 'Desenvolvimento de aplicações Full Stack utilizando React, Vue.js, Node.js, NestJS e TypeScript. Arquitetura e implementação de APIs REST e integrações entre frontend e backend. Implantação e gerenciamento da infraestrutura em AWS, incluindo hospedagem, CI/CD e processos de deploy. Desenvolvimento de componentes reutilizáveis e soluções escaláveis com foco em performance e manutenibilidade.',

        en: 'Development of Full Stack applications using React, Vue.js, Node.js, NestJS and TypeScript. Architecture and implementation of REST APIs and integrations between frontend and backend. Deployment and management of AWS infrastructure, including hosting, CI/CD and deployment processes. Development of reusable components and scalable solutions focused on performance and maintainability.',
      },

      technologies: ['React', 'Vue.js', 'Node.js', 'NestJS', 'TypeScript', 'AWS', 'CI/CD'],
    },

    {
      period: {
        pt: '01/2022 — 03/2025',
        en: '01/2022 — 03/2025',
      },

      company: 'Spartans Initiative',

      location: {
        pt: 'Bauru, SP',
        en: 'Bauru, SP, Brazil',
      },

      role: {
        pt: 'Desenvolvedor Full Stack Pleno',
        en: 'Mid-Level Full Stack Developer',
      },

      description: {
        pt: 'Desenvolvimento de aplicações Full Stack utilizando React, Angular, Node.js, NestJS, TypeScript e Python. Implantação e gerenciamento de infraestrutura própria em DigitalOcean, utilizando CapRover, Docker e pipelines de CI/CD. Desenvolvimento e manutenção de APIs REST e bancos de dados PostgreSQL, com foco em performance e escalabilidade. Participação em revisões de código, promovendo a melhoria contínua e a qualidade do software desenvolvido.',

        en: 'Development of Full Stack applications using React, Angular, Node.js, NestJS, TypeScript and Python. Deployment and management of dedicated infrastructure on DigitalOcean using CapRover, Docker and CI/CD pipelines. Development and maintenance of REST APIs and PostgreSQL databases, focusing on performance and scalability. Participation in code reviews, promoting continuous improvement and software quality.',
      },

      technologies: [
        'React',
        'Angular',
        'Node.js',
        'NestJS',
        'TypeScript',
        'Python',
        'PostgreSQL',
        'DigitalOcean',
        'CapRover',
        'Docker',
        'CI/CD',
      ],
    },

    {
      period: {
        pt: '12/2021 — 03/2023',
        en: '12/2021 — 03/2023',
      },

      company: 'Cetro Máquinas',
      companyUrl: 'https://www.cetro.com.br/',

      location: {
        pt: 'Bauru, SP',
        en: 'Bauru, SP, Brazil',
      },

      role: {
        pt: 'Desenvolvedor Full Stack Júnior',
        en: 'Junior Full Stack Developer',
      },

      description: {
        pt: 'Desenvolvimento de aplicações Full Stack utilizando Angular, React, Node.js, NestJS e TypeScript. Atuação em ambiente AWS com Docker e Kubernetes, participando da implantação e manutenção de aplicações escaláveis. Desenvolvimento de APIs e integrações com SAP para sincronização de dados e atualização do ERP. Utilização de Redis para otimização de desempenho e gerenciamento de cache em aplicações distribuídas.',

        en: 'Development of Full Stack applications using Angular, React, Node.js, NestJS and TypeScript. Work in an AWS environment with Docker and Kubernetes, participating in the deployment and maintenance of scalable applications. Development of APIs and SAP integrations for data synchronization and ERP updates. Use of Redis for performance optimization and cache management in distributed applications.',
      },

      technologies: [
        'Angular',
        'React',
        'Node.js',
        'NestJS',
        'TypeScript',
        'AWS',
        'Docker',
        'Kubernetes',
        'SAP',
        'Redis',
      ],
    },
  ] as Experience[],

  education: [
    {
      period: {
        pt: '01/2020 — 12/2024',
        en: '01/2020 — 12/2024',
      },

      institution: 'Universidade Paulista',

      location: {
        pt: 'Bauru, SP',
        en: 'Bauru, SP, Brazil',
      },

      degree: {
        pt: 'Bacharelado em Ciência da Computação',
        en: 'Bachelor of Computer Science',
      },
    },

    {
      period: {
        pt: '09/2021 — 09/2022',
        en: '09/2021 — 09/2022',
      },

      institution: 'JStack',

      location: {
        pt: 'Brasil',
        en: 'Brazil',
      },

      degree: {
        pt: 'Especialização em JavaScript, Node.js e Ecossistema React',
        en: 'Specialization in JavaScript, Node.js and React Ecosystem',
      },
    },
  ],

  skills: [
    'Angular',
    'React',
    'Vue.js',
    'Node.js',
    'NestJS',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'SQL',
    'NoSQL',
    'Git',
    'Docker',
    'RESTful APIs',
    'AWS',
    'EC2',
    'S3',
    'Firebase',
    'Firebase Functions',
    'Google Cloud',
    'Push Notifications',
    'Redis',
    'Clean Code',
    'Clean Architecture',
    'API Integrations',
    'Payment Gateways',
    'LLMs',
  ],

  projects: [
    {
      name: 'Gerador de Currículos',

      description: {
        pt: 'Plataforma para geração de documentos PDF personalizados a partir de informações estruturadas. O mesmo motor foi desenvolvido de forma flexível para diferentes necessidades, sendo utilizado na criação de currículos, recibos, comprovantes de recebimento de cargas e documentos de orçamento para trabalhos freelancer.',
        en: 'Platform for generating customized PDF documents from structured information. The same flexible engine was designed to support different use cases, including resumes, receipts, cargo receiving documents and quotes for freelance projects.',
      },

      technologies: ['Angular', 'Tailwind', 'TypeScript', 'PDF Generation', 'Responsive Design'],

      status: 'in-progress',
    },

    {
      name: 'Minha Dieta',

      description: {
        pt: 'Aplicativo Android criado para centralizar o controle de dieta, peso, treinos e evolução. O aplicativo calcula automaticamente necessidades nutricionais, macronutrientes e metabolismo basal, registra histórico de peso e organiza treinos por dia da semana. Todo o conteúdo fica disponível offline através de um banco de dados local, proporcionando acesso instantâneo sem depender de conexão com a internet.',

        en: 'Android application created to centralize diet, weight, workout and progress tracking. The app automatically calculates nutritional needs, macronutrients and basal metabolic rate, tracks weight history and organizes workouts by day of the week. All data is available offline through a local database, providing instant access without depending on an internet connection.',
      },

      technologies: [
        'Angular',
        'Ionic',
        'Capacitor',
        'Kotlin',
        'SQLite',
        'TypeScript',
        'Native Plugins',
        'Offline First',
        'Android',
      ],

      status: 'in-progress',
    },

    {
      name: 'ICW Instabook',

      description: {
        pt: 'Projeto colaborativo focado em transformar perfis do Instagram em vitrines digitais inteligentes. Atuação na finalização de funcionalidades e refatorações essenciais, contribuindo para melhorias de usabilidade, qualidade de código e experiência mobile-first.',
        en: 'Collaborative project focused on transforming Instagram profiles into smart digital storefronts. Contributed to feature completion and essential refactoring, improving usability, code quality and the overall mobile-first experience.',
      },

      technologies: [
        'ReactJS',
        'Nullstack',
        'Tailwind',
        'TypeScript',
        'Responsive Design',
        'Mobile First',
        'UI/UX',
        'Analytics',
      ],

      url: 'https://instabook.icw.tec.br',
      status: 'completed',
    },

    {
      name: 'Contabilivre Site',

      description: {
        pt: 'Redesign completo do site da corretora Contabilivre, utilizando Angular e Ionic para modernizar a experiência do usuário. O projeto incluiu adaptação do novo design para diferentes dispositivos, sistema de cache de arquivos, carregamento dinâmico, além de envio e recebimento de formulários e e-mails.',
        en: 'Complete redesign of the Contabilivre brokerage website using Angular and Ionic to modernize the user experience. The project included responsive design adaptation for different devices, file caching, dynamic loading, as well as contact form and email communication systems.',
      },

      technologies: [
        'Angular',
        'Ionic',
        'TypeScript',
        'Responsive Design',
        'Caching',
        'Email Integration',
      ],

      url: 'https://www.contabilivre.com.br',
      status: 'completed',
    },

    {
      name: 'Cravada',

      description: {
        pt: 'Aplicativo desenvolvido para a Confederação Brasileira de Voleibol (CBV), voltado à criação e organização de escalações de equipes de voleibol. A aplicação foi construída com Vue.js em uma arquitetura híbrida utilizando Ionic e Capacitor, com backend em Node.js e uma infraestrutura baseada em serviços da Google Cloud Platform e AWS.',
        en: 'Application developed for the Brazilian Volleyball Confederation (CBV), focused on creating and organizing volleyball team lineups. The application was built with Vue.js using a hybrid architecture with Ionic and Capacitor, with a Node.js backend and infrastructure based on Google Cloud Platform services and AWS.',
      },

      technologies: [
        'Vue.js',
        'Ionic',
        'Capacitor',
        'Node.js',
        'Google Cloud',
        'Firestore',
        'MongoDB',
        'AWS',
        'Firebase Functions',
      ],

      url: 'https://cravada.cbv.com.br/',
      status: 'completed',
    },
  ] as Project[],
} as const;
