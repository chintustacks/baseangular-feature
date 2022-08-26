import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectSenderComponent } from './subject-sender/subject-sender.component';
import { SubjectReciverComponent } from './subject-reciver/subject-reciver.component';



@NgModule({
  declarations: [
    SubjectSenderComponent,
    SubjectReciverComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubjectModule { }
