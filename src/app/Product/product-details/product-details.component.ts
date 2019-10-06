import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../products/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string="Product";
  product: IProduct;
  productId: number;
  constructor(private activateRoute: ActivatedRoute, private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
    this.productId = +this.activateRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe({
      next: product => this.product = product,
      error: err => console.log(err)
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}
