import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
cust?:any[]=this.adminservice.getAllCustomer();
x?:any[];
  constructor(private adminservice:AdminService) { 
    this.x=this.adminservice.getAllCustomer();
    console.log(this.cust);
  }
//  getAllCustomer(){
//       //this.x=this.customer;
//        this.x=this.adminservice.getAllCustomer();

//  }

delete(id:number){
   var index=Number(this.cust?.findIndex(x=>x.id===id));
   this.cust?.splice(index,1);
   console.log(this.cust);  
}

  ngOnInit(): void {
  }

}
