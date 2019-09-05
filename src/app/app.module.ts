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

import { OrdersComponent } from './orders/orders.component';
import { CreateorderComponent } from './orders/createorder/createorder.component';
import { EditorderComponent } from './orders/editorder/editorder.component';
import { ShoworderComponent } from './orders/showorder/showorder.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,

    ProductsComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,

    OrdersComponent,
    CreateorderComponent,
    EditorderComponent,
    ShoworderComponent
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