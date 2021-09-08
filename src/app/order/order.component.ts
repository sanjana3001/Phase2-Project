import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../customer/item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
id1?:number;
x:any=[];

uname?:string;
  constructor(private route:ActivatedRoute,private itemservice:ItemService) { 
    this.id1=this.route.snapshot.params['id'];
    console.log(this.id1);
    this.x=this.itemservice.getAllItems().filter(x=>x.id==this.id1)[0];
   console.log(this.itemservice.getAllItems().filter(x=>x.id==this.id1));
   console.log(this.x.id);
  }


  ngOnInit(): void {
  }

}
