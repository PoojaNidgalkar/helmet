import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation:null

  };

  constructor() { }
 // onSubmit(){
   // return this.http.post('http://192.168.29.28:8000',this.form)
    //.subscribe(
    //  data=>console.log(data),
   //   error=>this.handleError(error)
   // );
 // }

  ngOnInit() {
  }

}
