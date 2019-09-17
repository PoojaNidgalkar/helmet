import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.css']
})
export class EditstockComponent implements OnInit {
  
  public form = {
    product_id: null,
    images: null,
    Price: null,
    Quantity: null,
    Discount: null,
    Color: null,
   
  };
  // public error = null;
  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  ngOnInit() {
    const stock_id = this.route.snapshot.paramMap.get('stock');
  
    this.stockService.getStocks(stock_id).subscribe(
    data => this.handleResponse(data),
    error => this.handelError(error)
    );
  }

     handleResponse(data) {
     this.form = data;
    }


     updateStock() {
             const stock_id = this.route.snapshot.paramMap.get('stock');
             this.stockService.updateStock(this.form,stock_id).subscribe(
             error => this.handelError(error),
            );
          }

     handelError(error) {
     console.log(error);
     // this.error = error.error.error;
       }
}




 
 