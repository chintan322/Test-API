import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { ProductService } from './product/product.service';
import { Product } from './product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  fetchProducts() {
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/product/').pipe(
      tap((products) => {
        // console.log(products);
        this.productService.setProducts(products);
      })
    );
  }
}
