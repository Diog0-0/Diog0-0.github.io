import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly languageService = inject(LanguageService);

  changeLanguage(language: 'pt' | 'en'): void {
    this.languageService.setLanguage(language);
  }
}
