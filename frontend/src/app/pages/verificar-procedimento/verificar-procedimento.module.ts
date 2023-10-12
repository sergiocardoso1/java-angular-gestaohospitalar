import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificarProcedimentoComponent } from './verificar-procedimento.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    VerificarProcedimentoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    VerificarProcedimentoComponent
  ]
})
export class VerificarProcedimentoModule { }
