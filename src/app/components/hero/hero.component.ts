import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';
import { MY_RESUME } from '../../constants/my-resume.constant';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly languageService = inject(LanguageService);
  readonly resume = MY_RESUME;
}
