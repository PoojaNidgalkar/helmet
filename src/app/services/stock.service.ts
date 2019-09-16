
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  upload(formData: FormData, form: import("@angular/forms").FormGroup) {
    throw new Error("Method not implemented.");
  }
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private token: TokenService) { }

  getStock() {
    const options = {
      headers : new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/api/stocks`, options);
  }

  
  getStocks(stock) {
    const options = {
        headers : new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/api/stocks/${stock}`, options);
  }

  newStock(data) {
    const formData: any = new FormData();
    const files: Array<File> = data.image;
    for(let i =0; i < files.length; i++){
      formData.append("images[]", files[i], files[i]['name']);
  }
  formData.append('product_id', data.product_id);
  formData.append('color', data.color);
  formData.append('price', data.mrp);
  formData.append('quantity', data.quantity);
  formData.append('discount', data.discount);

  const options = {
    headers : new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.token.getToken()
    })
  };
  return this.http.post(`${this.baseUrl}/api/stocks`, formData,options)
  // return this.http.post(`${this.baseUrl}/api/stocks`, data, options);
  } 

  updateStock(data, stock_id) {
    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    console.log(data, stock_id);
    return this.http.patch(`${this.baseUrl}/api/stocks/${stock_id}`, data, options);
  }

  deleteStock(stock_id) {
    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.delete(`${this.baseUrl}/api/stock/${stock_id}`, options);
  }

 
}
