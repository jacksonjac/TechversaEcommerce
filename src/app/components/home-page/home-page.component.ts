import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  UserName: string = '';
  categories: string[] = [];
  selectedCategory: string = '';
  products: any[] = [];
  searchQuery: string = '';

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    //Initially check the username is available or Not
    const storedUserName = localStorage.getItem('TechName');
   
    if (storedUserName) {
      this.UserName = storedUserName;    //if Username is available set the name as Username
    } else {
      this.UserName = 'Guest';           //else set Username as Guest    
    }
    this.service.getCategories().subscribe(   
      (data: string[]) => {
        this.categories = data;
      },
      (error: any) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
    this.fetchProducts();
  }

  onSearchChange(event: any): void {
    this.searchQuery = event.target.value;
  }

  fetchProducts(): void {
    if (this.selectedCategory) {
      this.service.getProductsByCategory(this.selectedCategory).subscribe(
        (data: any[]) => {
          this.products = data;
          console.log('Products:', this.products);
        },
        (error) => {
          console.error('Error fetching products', error);
        }
      );
    }
  }

  navigateToProductDetails(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
