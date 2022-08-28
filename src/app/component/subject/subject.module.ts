import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectSenderComponent } from './subject-sender/subject-sender.component';
import { SubjectReciverComponent } from './subject-reciver/subject-reciver.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SubjectSenderComponent,
    SubjectReciverComponent
  ],
  exports:[
  SubjectSenderComponent,
  SubjectReciverComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SubjectModule { }
