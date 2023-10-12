import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFuncionarioComponent } from './cadastro-funcionario.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroFuncionarioComponent
  ]
})
export class CadastroFuncionarioModule { }
