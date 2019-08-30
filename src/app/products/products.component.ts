import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: null;
  public form: {
    product_id: null
  };
  constructor(private product: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.product.getProducts().subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }
  handleResponse(data) {
    console.log(data);
    
    this.products = data;
  }
  deleteProduct(productId: any) {
    this.product.deleteProduct(productId).subscribe(
      data => {
        this.router.navigateByUrl('/products');
      },
      error => console.log(error)
    );
  }

}

