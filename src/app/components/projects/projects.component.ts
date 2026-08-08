import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly languageService = inject(LanguageService);

  readonly projects = [
    {
      name: 'Project One',
      descriptionPt: 'Descrição do projeto e do problema que ele resolve.',
      descriptionEn: 'Project description and the problem it solves.',
      technologies: ['Angular', 'Node.js', 'Firebase'],
      url: '#',
    },
    {
      name: 'Project Two',
      descriptionPt: 'Aplicação desenvolvida para solucionar um problema específico.',
      descriptionEn: 'Application built to solve a specific problem.',
      technologies: ['Ionic', 'Angular', 'Node.js'],
      url: '#',
    },
    {
      name: 'Project Three',
      descriptionPt: 'Sistema completo envolvendo frontend, backend e infraestrutura.',
      descriptionEn: 'Complete system involving frontend, backend and infrastructure.',
      technologies: ['Angular', 'TypeScript', 'AWS'],
      url: '#',
    },
  ];
}
