import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
