import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { MainLayoutModule } from 'src/app/layout/main-layout/main-layout.module';
import { UserModule } from 'src/app/component/user/user.module';
import { EventEmitterModule } from 'src/app/component/eventemitter/eventemitter.module';
@NgModule({
  declarations: [
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserModule,
    MainLayoutModule,
    EventEmitterModule
  ],
 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
