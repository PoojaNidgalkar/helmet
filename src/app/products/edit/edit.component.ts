import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public form = {
    name: null,
  
    code: null,
    price: null,
    description: null,
    weight: null,
    features: null,
  };
  public error = null;

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() { 
    const product_id = this.route.snapshot.paramMap.get('product');
    this.productService.getProducts().subscribe(
    data => this.handleResponse(data),
    error => this.handelError(error)
  );
}
handleResponse(data) {
  this.form = data;
}
updateClient() {
// tslint:disable-next-line: variable-name
  const product_id = this.route.snapshot.paramMap.get('product');
  this.productService.updateProduct(this.form, product_id).subscribe(
    data => this.handleResponse(data),
    error => this.handelError(error)
  );
}
handelError(error) {
 
  this.error = error.error.error;
   }
}




 
 