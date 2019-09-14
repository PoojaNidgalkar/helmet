import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';




import { LoginComponent } from './auth/login/login.component';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import {  HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './auth/profile/profile.component';

import { CreateComponent } from './admin/products/create/create.component';
import { ProductsComponent } from './admin/products/products.component';
import { EditComponent } from './admin/products/edit/edit.component';
import { ShowComponent } from './admin/products/show/show.component';

import { FormComponent } from './shop/form/form.component';
import { ProductdetailsComponent } from './shop/productdetails/productdetails.component';
import { DetailsComponent } from './shop/details/details.component';

import { OrderComponent } from './shop/order/order.component';

import { StockComponent } from './admin/stock/stock.component';
import { CreatestockComponent } from './admin/stock/createstock/createstock.component';
import { EditstockComponent } from './admin/stock/editstock/editstock.component';
import { ShowstockComponent } from './admin/stock/showstock/showstock.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,

    LoginComponent,
    SignupComponent,
    ProfileComponent,

    ProductsComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,
    ProductdetailsComponent,
    DetailsComponent,
    OrderComponent,
    
    StockComponent,
    CreatestockComponent,
    EditstockComponent,
    ShowstockComponent
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