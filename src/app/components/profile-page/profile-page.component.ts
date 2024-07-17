import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  userName: string = '';

  ngOnInit(): void {
    const storedUserName = localStorage.getItem('TechName');

   
    if (storedUserName) {
      this.userName = storedUserName;
    } else {
      this.userName = 'Guest';
    }
  }
}
