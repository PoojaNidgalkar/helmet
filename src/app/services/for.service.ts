import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ForService {
  private baseUrl = environment.baseUrl;
  
  constructor(  
    private http: HttpClient,
    private token: TokenService
    ) { }
  form(data) {
    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })    
    }
    return this.http.post(`${this.baseUrl}/api/products`, data, options);
  }
} 

