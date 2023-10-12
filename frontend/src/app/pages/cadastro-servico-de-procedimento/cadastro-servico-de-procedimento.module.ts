import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroServicoDeProcedimentoComponent } from './cadastro-servico-de-procedimento.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroServicoDeProcedimentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroServicoDeProcedimentoComponent
  ]
})
export class CadastroServicoDeProcedimentoModule { }
