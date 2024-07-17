import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css'],
})
export class IntroPageComponent {
  name: string = '';
  isNameValid: boolean = true;
  constructor(private router: Router) {}
  validateName() {
    if (this.name.trim().length > 0) {
      this.isNameValid = true;
      localStorage.setItem('TechName', this.name.trim());
      this.router.navigate(['/home']);
    } else {
      this.isNameValid = false;
    }
  }
}
