import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoPacienteComponent } from './exibicao-paciente.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibicaoPacienteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibicaoPacienteComponent
  ]
})
export class ExibicaoPacienteModule { }
