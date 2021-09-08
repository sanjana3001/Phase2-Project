import { Injectable } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { CustomerListComponent } from '../admin/customer-list/customer-list.component';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  cust?:any[];
 users?:any[]=[
  {"uname":"sanjana","pwd":"sanj","role":"customer",},
  {"uname":"pooja","pwd":"poo","role":"admin"}
];
 customerlist?:any[]=[
  {"id":111,"name":"sanjana","pwd":"sanj","city":"bang","phone":111111,"role":"customer"},
  {"id":22,"name":"pooja","pwd":"poo","city":"delhi","phone":22222,"role":"customer"}

];

 
  constructor() {}

   addCust(x:any){
     this.customerlist?.push(x);
     console.log(x);
     console.log(this.customerlist);
   }
   getAllCustomer(){
     return this.customerlist;
   }
   changepass(user:any){
     var index=Number(this.users?.findIndex(x=>x.uname==user.uname));
     this.users?.splice(index,1,user);
     console.log(this.users);
     console.log(user);
   }
}
