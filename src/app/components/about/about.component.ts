import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';
import { MY_RESUME } from '../../constants/my-resume.constant';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly languageService = inject(LanguageService);
  readonly resume = MY_RESUME;
}
