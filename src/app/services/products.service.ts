import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private token: TokenService) { }

  getProducts() {
    const options = {
      headers : new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/api/products`, options);
  }
  getProduct(product) {
    const options = {
      headers : new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/api/products/${product}`, options);
  }
  newProduct(data) {
    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.post(`${this.baseUrl}/api/products`, data, options);
  }
// tslint:disable-next-line: variable-name
  updateProduct(data, product_id) {
    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    console.log(data, product_id);
    return this.http.patch(`${this.baseUrl}/api/products/${product_id}`, data, options);
  }
// tslint:disable-next-line: variable-name
  deleteProduct(product_id) {
    const options = {
      headers: new HttpHeaders({
      
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
     
    return this.http.delete(`${this.baseUrl}/api/products/${product_id}`, options);
  }

 
}
