import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-productdetails-page',
  templateUrl: './productdetails-page.component.html',
  styleUrls: ['./productdetails-page.component.css'],
})
export class ProductdetailsPageComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.service.getProductById(productId).subscribe(
        (data: any) => {
          this.product = data;
          console.log('Product details:', this.product); // Display product details in console
        },
        (error) => {
          console.error('Error fetching product details', error);
        }
      );
    } else {
      console.error('No product ID found in the route.');
    }
  }

  addToCart() {
    this.cartService.incrementCartCount();
    // Additional logic for adding the product to cart
  }
}
