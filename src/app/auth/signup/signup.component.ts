import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public form = {
     email: null,
      name: null,
      password: null,
      password_confirmation:null
    };
    public error = null;
    constructor(
      private userService: UserService,
      private router: Router
    ) { }

    ngOnInit() { }

    signup() {
      console.log(this.form);
      this.userService.signup(this.form).subscribe(
        data => this.handleSignup(data),
        error => this.handelError(error)
      );
    }
    handleSignup(data) {
    console.log(data);
    if (data.status === 'success') {
      this.router.navigateByUrl('/profile');
    }
    }
    
    handelError(error) {
      this.error = error.error.error;
    }
  }