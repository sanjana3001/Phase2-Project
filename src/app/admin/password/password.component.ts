import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { AccountService } from 'src/app/accounts/account.service';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
newpwd='';
uname='';
  change(newpwd:string){
    var user={ "uname":this.uname,"pwd":newpwd,"role":"admin"};
    this.accountservice.changepass(user);
    console.log(user);
    alert(this.uname);
    alert('changed succesfully');
    this.router.navigate(['login']);

    
  }
  constructor(private accountservice:AccountService,private loginservice:LoginComponent,private route:ActivatedRoute, private router:Router) { 
  this.uname=this.route.snapshot.params['uname'];}
  ngOnInit(): void {
  }

}
