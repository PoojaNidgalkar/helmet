import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    grant_type : 'password',
    client_id : environment.client_id,
    client_secret : environment.client_secret,
    username: null,
    password: null,
    scope : '',
  };
  public error = null;
  constructor(
    private userService: UserService,
    private token: TokenService, //to give handleResponse service to token 
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
    this.userService.login(this.form).subscribe(

      data => this.handleResponse(data), //if the service is successfull
      error => this.handelError(error)
    );
  }
  handleResponse(data) {
    this.token.setToken(data);
    this.router.navigateByUrl('/profile');
  }
  handelError(error) {
    this.error = error.error.error;
  }
}