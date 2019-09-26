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
   
    images: null,
    Price: null,
    Quantity:null,
    Discount: null,
    Color: null,
 };
  public error = null;
  // public amount:number;

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit() {
    
  }
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
  
  //store and send the data to server
  newStock() {
      console.log(this.form);
      this.stockService.newStock(this.form).subscribe(
      data => {
        console.log('Success!');
        this.router.navigateByUrl('/stock');
      },
      error => console.log('Error!',error)
    );
   }


  handelError(error) {
    this.error = error.error.error;
  }
 
  onSelectFile(event) {
    this.form.images = <Array<File>>event.target.files;
  }
  
}
