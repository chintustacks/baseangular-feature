import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Output() incremnt = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  Inc(){
    this.incremnt.emit("event");
  }

  Dec(){
    this.decrement.emit("event");
  }

  Res(){
    this.reset.emit("event");
  }



}
