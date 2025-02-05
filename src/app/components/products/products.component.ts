import { Component } from '@angular/core';
import { ProductInterface } from '../../interfaces/product-interface';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-products',
  imports: [CommonModule, NzCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {
  public products: Array<ProductInterface> = [];
  
    constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
      this.getProducts();
    }
  
    getProducts() {
      this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
    }
}