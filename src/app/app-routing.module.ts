import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { PasswordComponent } from './admin/password/password.component';
import { CustomerpageComponent } from './customer/customerpage/customerpage.component';
import { FinditemComponent } from './customer/finditem/finditem.component';
import { ItemsComponent } from './customer/items/items.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"home"},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'customerPage/:uname',component:CustomerpageComponent},
  {path:'allItems',component:ItemsComponent},
  {path:'adminPage/:uname',component:AdminpageComponent},
  {path:'adminPage/:uname/finditem',component:FinditemComponent},
  {path:'finditem',component:FinditemComponent},
  {path:'adminPage/:uname/allCust',component:CustomerListComponent},
  {path:'adminPage/:uname/pass',component:PasswordComponent},
  {path:'orders/:id',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
