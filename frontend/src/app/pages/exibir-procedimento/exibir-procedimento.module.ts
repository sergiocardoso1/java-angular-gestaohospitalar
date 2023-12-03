import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibirProcedimentoComponent } from './exibir-procedimento.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibirProcedimentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibirProcedimentoComponent
  ]
})
export class ExibirProcedimentoModule { }
