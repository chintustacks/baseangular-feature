import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject-reciver',
  templateUrl: './subject-reciver.component.html',
  styleUrls: ['./subject-reciver.component.css']
})

export class SubjectReciverComponent implements OnInit {

  myTextVal!: string;

  constructor(private subjectservice: SubjectService){}
 
  ngOnInit(): void {
  }

  sendTextValue(){
    this.subjectservice.passValue(this.myTextVal);
  }
}
