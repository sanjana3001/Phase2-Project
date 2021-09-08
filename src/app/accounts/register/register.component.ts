import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
x:any;
id=0;
name=' ';
city=' ';
pwd?:string;
phone?:number;
  constructor(private account:AccountService,private adminservice:AdminService, private router:Router) { }
  addCust(){
    this.x= {"id":this.id,"name":this.name,"city":this.city,"phone":this.phone,"role":"customer"};
    this.account.addCust(this.x);
    this.adminservice.addCust(this.x);
    alert("Registered succesfully");
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
