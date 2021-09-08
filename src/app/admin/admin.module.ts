import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PasswordComponent } from './password/password.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomerListComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class AdminModule { }
