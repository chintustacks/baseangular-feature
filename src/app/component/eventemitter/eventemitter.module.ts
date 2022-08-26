import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';



@NgModule({
  declarations: [
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterButtonsComponent,
    CounterOutputComponent
   ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class EventEmitterModule { }
