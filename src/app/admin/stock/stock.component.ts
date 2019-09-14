import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public stock: any;
  
  public form: {
    product_id: null
  };

  http: any;
  constructor(private product: StockService, private router: Router) { }


  ngOnInit() {
    this.getStock();
  }

  getStock() {
    this.product.getStock().subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }
  handleResponse(data) {
    console.log(data);
    
    this.stock = data;
  }
  

  //delete by using popup confirmation
    deleteStock(stockId:any) {
      if(confirm("Are you sure to delete "+stockId)) {
        this.stock.deleteStock(stockId).subscribe(
              data => {
                this.getStock();
              },
        );
      }
    }
}







 


