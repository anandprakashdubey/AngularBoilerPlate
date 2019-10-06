import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuardGuard } from '../Guards/product-details-guard.guard';
import { SharedModule } from '../shared/shared.module';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,     
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
     { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductDetailsGuardGuard] },
      
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
