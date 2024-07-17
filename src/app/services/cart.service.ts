import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  incrementCartCount() {
    this.cartCountSubject.next(this.cartCountSubject.value + 1);
  }

  getCartCount() {
    return this.cartCountSubject.value;
  }
}
