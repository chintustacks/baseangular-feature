import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {

  counter:number=0

  constructor() { }

  ngOnInit(): void {
  }
  Inc(){
    this.counter++
  }
  Dec(){
    this.counter--;
  }
  Res(){
    this.counter=0
  }


}
