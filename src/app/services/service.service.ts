import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://fakestoreapi.com/products/categories';
  private productsUrl = 'https://fakestoreapi.com/products/category';
  private productUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.productsUrl}/${category}`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.productUrl}/${id}`);
  }
}
