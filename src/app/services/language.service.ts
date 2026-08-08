import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly language = signal<Language>('pt');

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  toggleLanguage(): void {
    this.language.update((current) => (current === 'pt' ? 'en' : 'pt'));
  }

  is(language: Language): boolean {
    return this.language() === language;
  }
}
