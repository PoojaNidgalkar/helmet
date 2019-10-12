import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],

  providers: [NgbCarouselConfig]
})
export class ShowComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  public product: null;

  constructor(private productService: ProductsService, private route: ActivatedRoute, config: NgbCarouselConfig) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {

    // tslint:disable-next-line: variable-name
    
        const product_id = this.route.snapshot.paramMap.get('product');
        this.productService.getProducts(product_id).subscribe(
          data => this.handleResponse(data),
          error => console.log(error)
        );
      }
      handleResponse(data) {
        console.log(data);
        this.product = data;
      }

}

















