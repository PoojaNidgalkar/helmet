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

  http: any;
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
  //delete by using refersh
  // deleteProduct(productId: any) {
  //   this.product.deleteProduct(productId).subscribe(
  //     data => {
  //       this.router.navigateByUrl('/products');
  //     },
  //     error => console.log(error)
  //   );
  //   }

  //delete by using popup confirmation
    deleteProduct(productId:any) {
      if(confirm("Are you sure to delete "+productId)) {
        this.product.deleteProduct(productId).subscribe(
              data => {
                this.getProducts();
              },
        );
      }
    }
}

