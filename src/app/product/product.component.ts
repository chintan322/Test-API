import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { ApicallService } from '../apicall.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService,private apicallService: ApicallService) {}

  ngOnInit(): void {
    this.subscription = this.productService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
    this.products = this.productService.getProducts();
  }

  onFetchData() {
    this.apicallService.fetchProducts().subscribe();
  }
}
