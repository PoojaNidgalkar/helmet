import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form = {
    
    name: null,
    code: null,
    price: null,
    description: null,
    weight: null,
    features: null,
    
  };
  public error = null;
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  newProduct() {
    this.productService.newProduct(this.form).subscribe(
      data => {
        this.router.navigateByUrl('/products');
      },
      error => this.handelError(error)
    );
  }
  handelError(error) {
    this.error = error.error.error;
  }
}





  