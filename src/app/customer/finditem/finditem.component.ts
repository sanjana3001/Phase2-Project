import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finditem',
  templateUrl: './finditem.component.html',
  styleUrls: ['./finditem.component.css']
})
export class FinditemComponent implements OnInit {

items:any[];
x:any;
Name='';
id!:number;
id1=0;
item?:any;

  
  constructor(private router:Router) { 
    this.items=[
      {"id":101,"Name":"dosa","price":200,"calories":250,"desc":"Veg","quantity":2},
      {"id":102,"Name":"pizza","price":700,"calories":1344,"desc":"Veg","quantity":1}
    ];
  }
  getItem(id:number){
    
    this.item = this.items.find(x=>x.id==id);  
    this.x=this.item;
   
  }

  getItemByName(Name:string){

    this.item = this.items.find(x=>x.Name===Name);
    var index=this.items.findIndex(x=>x.Name===Name);
    this.id=this.items[index].id;
    this.x=this.item;

  
    
  }
  order(id:number){
this.router.navigate(['orders',id]);
  }
  ngOnInit(): void {
  }

}
