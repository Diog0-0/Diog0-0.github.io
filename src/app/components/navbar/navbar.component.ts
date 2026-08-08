import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';

import { MY_RESUME } from '../../constants/my-resume.constant';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly languageService = inject(LanguageService);
  readonly resume = MY_RESUME;

  changeLanguage(language: 'pt' | 'en'): void {
    this.languageService.setLanguage(language);
  }
}
