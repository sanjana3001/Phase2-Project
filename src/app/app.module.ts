import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './customer/items/items.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './accounts/login/login.component';
import { FinditemComponent } from './customer/finditem/finditem.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { RegisterComponent } from './accounts/register/register.component';
import{HttpClientModule}  from '@angular/common/http';
import { PasswordComponent } from './admin/password/password.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    AdminpageComponent,
    TestComponent,
    LoginComponent,
    FinditemComponent,
    CustomerListComponent,
    RegisterComponent,
    PasswordComponent,
    OrderComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerListComponent,PasswordComponent,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
