import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcarProcedimentoComponent } from './marcar-procedimento.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MarcarProcedimentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    MarcarProcedimentoComponent
  ]
})
export class MarcarProcedimentoModule { }
