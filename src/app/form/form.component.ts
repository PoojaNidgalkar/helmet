import { Component, OnInit } from '@angular/core';
import { ForService } from '../services/for.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

declare var tinymce: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
 
})
export class FormComponent implements OnInit {
  public form = {
  name:null,
  code:null,
  price:null,
  description:null,
  weight:null,
  features:null,
  // size:null,
  };

  public error = null;
  constructor(
    private forService: ForService,
    private token: TokenService, //to give handleResponse service to token 
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
    this.forService.form(this.form).subscribe(
      data => this.handleResponse(data), //if the service is successfull
      error => this.handelError(error)
    );
  }
  handleResponse(data) {
    this.token.setToken(data);
    //this.router.navigateByUrl('/products');
  }
  handelError(error) {
    this.error = error.error.error;
  }
}