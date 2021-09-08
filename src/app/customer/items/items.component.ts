import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items?:any[];
x:any;
id!:number;
  constructor(private itemservice:ItemService,private router:Router) { 
   this.items=this.itemservice.getAllItems();
   console.log(this.items);
  }

  order(id:number){
    this.router.navigate(['orders',id]);
      }
  ngOnInit(): void {
  }

}
