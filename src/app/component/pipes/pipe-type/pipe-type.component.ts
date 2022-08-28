import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-type',
  templateUrl: './pipe-type.component.html',
  styleUrls: ['./pipe-type.component.css']
})
export class PipeTypeComponent implements OnInit {
  dateObj: number = Date.now();
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
