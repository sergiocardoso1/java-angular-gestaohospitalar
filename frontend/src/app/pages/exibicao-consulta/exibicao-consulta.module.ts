import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoConsultaComponent } from './exibicao-consulta.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibicaoConsultaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibicaoConsultaComponent
  ]
})
export class ExibicaoConsultaModule { }
