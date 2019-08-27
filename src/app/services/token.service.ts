import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private baseUrl = environment.baseUrl;
  private data = {
    grant_type : 'refresh_token',
    refresh_token: null,
    client_id : environment.client_id,
    client_secret : environment.client_secret,
    scope : '',
  };

  constructor(private http: HttpClient) { }
  getToken() {
    return localStorage.getItem('access_token');
  }
  setToken(data) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('expires_in', data.expires_in);
  }
  resetToken() {
    this.data.refresh_token = localStorage.getItem('refresh_token');
    return this.http.post(`${this.baseUrl}/oauth/token`, this.data).subscribe(
      result => this.handleResponse(result),
      error => console.log(error)
    );
  }
  handleResponse(data) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('expires_in', data.expires_in);
  }
  deleteToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
  }
}