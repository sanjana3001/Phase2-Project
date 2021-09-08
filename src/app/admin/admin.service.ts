import { Injectable } from '@angular/core';
import { AccountService } from '../accounts/account.service';
import { LoginComponent } from '../accounts/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  customerlist?:any[]=[
    {"id":111,"name":"sanjana","pwd":"sanj","city":"bang","phone":111111,"role":"customer"},
    {"id":22,"name":"pooja","pwd":"poo","city":"delhi","phone":22222,"role":"customer"}
  
  ];

  addCust(x:any){
    this.customerlist?.push(x);
    console.log(x);
    console.log(this.customerlist);
  }
  getAllCustomer(){
    return this.customerlist;
  }

  constructor() { 

  }
}

