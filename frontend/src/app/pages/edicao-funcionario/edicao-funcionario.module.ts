import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdicaoFuncionarioComponent } from './edicao-funcionario.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    EdicaoFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    EdicaoFuncionarioComponent
  ]
})
export class EdicaoFuncionarioModule { }
