import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent implements OnInit {
uname='';
  constructor(private route:ActivatedRoute) {
    this.uname=this.route.snapshot.params['uname']; }

  ngOnInit(): void {
  }

}
