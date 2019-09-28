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
    mrp: null,
    feature_image: null,
    image: null,
    color: null,
  };
  public error = null;

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() { 
    const product_id = this.route.snapshot.paramMap.get('product');
  
       this.productService.getProducts(product_id).subscribe(
    data => this.handleResponse(data),
    error => this.handelError(error)
  );
}
handleResponse(data) {
  this.form = data;
}
updateProduct() {
// tslint:disable-next-line: variable-name
  const product_id = this.route.snapshot.paramMap.get('product');
 
    this.productService.updateProduct(this.form,product_id).subscribe(
    error => this.handelError(error),
    

  );
}



handelError(error) {
  console.log(error);
  // this.error = error.error.error;
   }
}




 
 