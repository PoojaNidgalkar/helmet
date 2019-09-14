import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstock',
  templateUrl: './createstock.component.html',
  styleUrls: ['./createstock.component.css']
})
export class CreatestockComponent implements OnInit {

  public form = {
  product_id:null,
    name: null,
    image: null,
    mrp: null,
    quantity:null,
    discount: null,
    color: null,
    
    
  };
  public error = null;
  // public amount:number;

  constructor(private stockService: StockService, private router: Router) { }
  // addToCart(){
  //   this.amount = 1;
  //   }
    
  //   addItem(){
  //   this.amount=this.amount+1;
  //   console.log('plus is : '+this.amount)
  //   }
    
  //   removeItem(){
  //   this.amount=this.amount-1;
  //   console.log('plus is : '+this.amount)
  //   }
  
  newStock() {
    this.stockService.newStock(this.form).subscribe(
      data => {
        console.log(data);
        // this.router.navigateByUrl('/stock');
      },
      error => this.handelError(error)
    );
  }
  handelError(error) {
    this.error = error.error.error;
  }
 
  onSelectFile(event) {
    this.form.image = <Array<File>>event.target.files;
  }
  
  ngOnInit() {
  }

}
