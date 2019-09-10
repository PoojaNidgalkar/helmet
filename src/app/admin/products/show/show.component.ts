import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public product: null;
  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: variable-name
        const product_id = this.route.snapshot.paramMap.get('product');
        this.productService.getProduct(product_id).subscribe(
          data => this.handleResponse(data),
          error => console.log(error)
        );
      }
      handleResponse(data) {
        console.log(data);
        this.product = data;
      }

}






