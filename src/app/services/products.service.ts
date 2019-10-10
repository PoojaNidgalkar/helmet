import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { TokenService } from './token.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  upload(formData: FormData, form: import("@angular/forms").FormGroup) {
    throw new Error("Method not implemented.");
  }
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private token: TokenService,private httpService: HttpClient) { }
  myFiles:string [] = [];
  sMsg:string = '';

  getProduct() {
    const options = {
      headers : new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/api/products`, options);
  }

  // show
  getProducts(product) {
    const options = {
      headers : new HttpHeaders({
        Authorization: 'Bearer' + this.token.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/api/products/${product}`, options);
  }
  

  //single image
  newProduct(data) {
    const formData: any = new FormData();
    const files: Array<File> = data.feature_image;

    for(let i =0; i < files.length; i++){
      formData.append("feature_image", files[i], files[i]['name']);
  }
  formData.append('name', data.name);
  formData.append('code', data.code);
  formData.append('mrp', data.mrp);
  formData.append('quantity', data.quantity);
  formData.append('description', data.description);
  formData.append('weight', data.weight);
  formData.append('features', data.features);

  data.color.forEach((color, index) => {
    console.log(color)
    formData.append('colors['+index+'][\'color\']', color.color)
    formData.append('colors['+index+'][\'price\']', color.price)
    color.image.forEach((image, i) => {
                console.log(image);
                formData.append('colors['+index+'][\'images\']['+i+']', image, image['name']);
          });
  });
  
    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.post(`${this.baseUrl}/api/products`, formData, options);
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

  // multi image

  logValue (data1) {
    const frmData = new FormData();
    const files: Array<File> = data1.image;

    for (var i = 0; i < this.myFiles.length; i++) { 
      frmData.append("image", this.myFiles[i]);
    }
    
    frmData.append('color', data1.color);
    frmData.append('price', data1.price);
    frmData.append('image', data1.image);

    const options = {
      headers : new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token.getToken()
      })
    };
    return this.http.post(`${this.baseUrl}/api/products`, frmData, options);
  }
}




 

 



 

 


