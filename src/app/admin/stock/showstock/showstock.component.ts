import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-showstock',
  templateUrl: './showstock.component.html',
  styleUrls: ['./showstock.component.css']
})
export class ShowstockComponent implements OnInit {
  public stock: null;

  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  ngOnInit() {
    const stock_id = this.route.snapshot.paramMap.get('stock');
        this.stockService.getStocks(stock_id).subscribe(
          data => this.handleResponse(data),
          error => console.log(error)
        );
      }
      handleResponse(data) {
        console.log(data);
        this.stock = data;
      }
}








