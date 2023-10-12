import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
