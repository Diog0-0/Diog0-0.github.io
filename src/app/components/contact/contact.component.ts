import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';
import { MY_RESUME } from '../../constants/my-resume.constant';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly languageService = inject(LanguageService);
  readonly resume = MY_RESUME;
}
