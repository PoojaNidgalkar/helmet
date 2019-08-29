import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public form = {
     name:null,
    
     email: null,
     
     password: null,
     password_confirmation:null
   };

  
   constructor(
    private userService: UserService
   ) { }
//fetch data 
  ngOnInit() {
    this.userService.getProfile().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  onProfile(){
    console.log(this.form);
  
    
  }
 
}
