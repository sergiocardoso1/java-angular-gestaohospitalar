import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdicaoPacienteComponent } from './edicao-paciente.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    EdicaoPacienteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    EdicaoPacienteComponent
  ]
})
export class EdicaoPacienteModule { }
