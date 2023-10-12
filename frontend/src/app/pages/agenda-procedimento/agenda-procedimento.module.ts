import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaProcedimentoComponent } from './agenda-procedimento.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    AgendaProcedimentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    AgendaProcedimentoComponent
  ]

})
export class AgendaProcedimentoModule { }
