import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoConsultaPacienteComponent } from './exibicao-consulta-paciente.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibicaoConsultaPacienteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibicaoConsultaPacienteComponent
  ]
})
export class ExibicaoConsultaPacienteModule { }
