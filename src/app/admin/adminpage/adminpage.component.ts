import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/accounts/login/login.component';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
uname=' ';
  constructor(private loginservice:LoginComponent, private router:Router,private route:ActivatedRoute) {
    this.uname=this.route.snapshot.params['uname'];
    console.log(this.uname);
   }
   logout(){
    var c= confirm("you will be logged out");
    if(c==true){
      this.router.navigate(['../home']);
    }
  }
  ngOnInit(): void {
  }

}
