import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public amount:number;

  constructor() { }
  addToCart(){
    this.amount = 1;
    }
    
    addItem(){
    this.amount=this.amount+1;
    console.log('plus is : '+this.amount)
    }
    
    removeItem(){
    this.amount=this.amount-1;
    console.log('plus is : '+this.amount)
    }

  ngOnInit() {
  }

}
