import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { FinditemComponent } from './finditem/finditem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomerpageComponent,
    FinditemComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class CustomerModule { }
