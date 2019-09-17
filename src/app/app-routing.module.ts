import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';

import { ProductsComponent } from './admin/products/products.component';
import { CreateComponent as CreateProductsComponent } from './admin/products/create/create.component';
import { ShowComponent as ShowProductsComponent } from './admin/products/show/show.component';
import { EditComponent as EditProductsComponent } from './admin/products/edit/edit.component';

import {FormComponent } from './shop/form/form.component';
import { ProductdetailsComponent } from './shop/productdetails/productdetails.component';
import { DetailsComponent } from './shop/details/details.component';

import { OrderComponent } from './shop/order/order.component';

import { StockComponent } from './admin/stock/stock.component';
import { CreatestockComponent as CreatestockComponent } from './admin/stock/createstock/createstock.component';
import { ShowstockComponent as ShowstockComponent } from './admin/stock/showstock/showstock.component';
import { EditstockComponent as EditstockComponent } from './admin/stock/editstock/editstock.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'signup',
    component:SignupComponent 
  },
 
  {
    path:'profile',
    component:ProfileComponent 
  },
 
  {
    path:'form', 
    component:FormComponent 
  },
  //product
  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path:'products/create', 
    component:CreateProductsComponent 
  },

  {
    path:'products/:product/edit', 
    component:EditProductsComponent 
  },

  {
    path:'products/:product', 
    component:ShowProductsComponent 
  },

  {
    path:'productdetails', 
    component:ProductdetailsComponent 
  },

  {
    path:'details', 
    component:DetailsComponent 
  },

  {
    path:'order', 
    component:OrderComponent 
    
  },

  //stock
  {
    path:'stock', 
    component:StockComponent 
  },

  {
    path:'createstock/create', 
    component: CreatestockComponent
  },

  {
    path:'stocks/:stock', 
    component:ShowstockComponent 
  },

  {
    path:'stocks/:stock/edit', 
    component:EditstockComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
