import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private token: TokenService
    ) { }
//send data 
  login(data) {
    return this.http.post(`${this.baseUrl}/oauth/token`, data);
  }
  signup(data) {
    return this.http.post(`${this.baseUrl}/api/register`, data);
  }
  //authorisation
  getProfile() {
    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })    
    }
    return this.http.get(`${this.baseUrl}/api/profile`, options);
  }
  updateProfile(data) {
    return this.http.post(`${this.baseUrl}/api/profile`, data);
  }
}