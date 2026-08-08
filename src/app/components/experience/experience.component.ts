import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';
import { MY_RESUME } from '../../constants/my-resume.constant';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly languageService = inject(LanguageService);
  readonly resume = MY_RESUME;
}
