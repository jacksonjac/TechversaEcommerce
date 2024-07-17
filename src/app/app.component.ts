import { Component,ChangeDetectorRef } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDropdownOpen = false;
  username:string = ''
  cartCount = 0;

  constructor(private cartService: CartService,
    private router:Router,
    private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
   this.cdr.detectChanges()
    const name = localStorage.getItem('TechName')
    if(name){
      this.username = name
    }
   
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  signOut() {
    localStorage.removeItem('TechName');
    this.username = ''; // Clear the username
    this.router.navigate(['/intro']).then(() => {
      this.cdr.detectChanges(); // Trigger change detection
    });
  }
}
