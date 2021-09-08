import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items=[
    {"id":101,"Name":"dosa","price":200,"calories":250,"desc":"Veg","quantity":2},
    {"id":102,"Name":"pizza","price":700,"calories":1344,"desc":"Veg","quantity":1},
    {"id":103,"Name":"pasta","price":600,"calories":1604,"desc":"Veg","quantity":3},
  ];
  constructor() { }
  getAllItems()
  {
    return this.items;
  }
}
