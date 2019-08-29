import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import {FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent as CreateProductsComponent } from './products/create/create.component';
import { ShowComponent as ShowProductsComponent } from './products/show/show.component';
import { EditComponent as EditProductsComponent } from './products/edit/edit.component';


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
    path:'page', 
    component:PageComponent 
  },

  {
    path:'form', 
    component:FormComponent 
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path:'products/create', 
    component:CreateProductsComponent 
  },

  {
    path:'products/edit', 
    component:EditProductsComponent 
  },

  {
    path:'products/show', 
    component:ShowProductsComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
