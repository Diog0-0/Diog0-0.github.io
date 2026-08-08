import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly languageService = inject(LanguageService);

  readonly experiences = [
    {
      period: '2024 — Present',
      company: 'Company Name',
      rolePt: 'Desenvolvedor Full Stack Sênior',
      roleEn: 'Senior Full Stack Developer',
      descriptionPt:
        'Desenvolvimento de aplicações web e mobile, APIs, integrações e soluções escaláveis.',
      descriptionEn:
        'Development of web and mobile applications, APIs, integrations and scalable solutions.',
    },
    {
      period: '2021 — 2024',
      company: 'Company Name',
      rolePt: 'Desenvolvedor Full Stack',
      roleEn: 'Full Stack Developer',
      descriptionPt:
        'Desenvolvimento de produtos digitais utilizando tecnologias modernas de frontend e backend.',
      descriptionEn:
        'Development of digital products using modern frontend and backend technologies.',
    },
  ];
}
