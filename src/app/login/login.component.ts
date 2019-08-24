import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public form = 
  {
    email : null,
    password: null,
    
  };
  constructor(private http:HttpClient) { }

  onSubmit(){
    return this.http.post('http://192.168.29.28:8000',this.form).subscribe(
    data => console.log(data),
    error  => console.log(error)
    );
   }

}
