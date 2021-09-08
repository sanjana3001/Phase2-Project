import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname='';
pwd='';
role='';

// users=[
//   {"uname":"sanjana","pwd":"sanj","role":"customer"},
//   {"uname":"pooja","pwd":"poo","role":"admin"}
// ];
  constructor(private router:Router,private accountservice:AccountService) {}
check(uname:string,pwd:string, role:string){
  var user=this.accountservice.users?.filter(x=>x.uname==uname)[0];
  if (user.uname === uname && user.pwd === pwd && user.role===role){
    alert("Valid credentials");
    if(this.role==("customer")){
      this.router.navigate(['../customerPage/',uname]);
    }
    else if(this.role=="admin")
      this.router.navigate(['../adminPage',uname]);
}
else alert("invalid credentials");

}

  ngOnInit(): void {
  }

}
