import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import {FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
