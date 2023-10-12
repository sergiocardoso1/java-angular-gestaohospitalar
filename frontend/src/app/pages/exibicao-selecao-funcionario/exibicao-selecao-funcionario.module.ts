import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoSelecaoFuncionarioComponent } from './exibicao-selecao-funcionario.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibicaoSelecaoFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibicaoSelecaoFuncionarioComponent
  ]
})
export class ExibicaoSelecaoFuncionarioModule { }
