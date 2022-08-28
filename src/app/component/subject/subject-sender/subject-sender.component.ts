import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject-sender',
  templateUrl: './subject-sender.component.html',
  styleUrls: ['./subject-sender.component.css']
})

export class SubjectSenderComponent implements OnInit {

  myTextVal!: string;

  constructor(private subjectservice: SubjectService){}
  ngOnInit(): void {
  }
  
  sendTextValue(){
    this.subjectservice.passValue(this.myTextVal);
  }
}

