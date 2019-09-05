import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {  HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './products/create/create.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './products/edit/edit.component';
import { ShowComponent } from './products/show/show.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    CreateComponent,
    ProductsComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 