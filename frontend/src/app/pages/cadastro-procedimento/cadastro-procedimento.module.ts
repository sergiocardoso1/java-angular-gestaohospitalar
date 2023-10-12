import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProcedimentoComponent } from './cadastro-procedimento.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroProcedimentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroProcedimentoComponent
  ]
})
export class CadastroProcedimentoModule { }
