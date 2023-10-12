import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedimentosComponent } from './procedimentos.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ProcedimentosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ProcedimentosComponent
  ]
})
export class ProcedimentosModule { }
