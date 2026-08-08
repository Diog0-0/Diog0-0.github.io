import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';
import { MY_RESUME } from '../../constants/my-resume.constant';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly languageService = inject(LanguageService);
  readonly resume = MY_RESUME;
}
