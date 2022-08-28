import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeTypeComponent } from './pipe-type/pipe-type.component';
import { TruncatePipe } from './pipe-type/turncatePipe';



@NgModule({
  declarations: [
    PipeTypeComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    PipeTypeComponent
  ]
})
export class PipesModule { }
