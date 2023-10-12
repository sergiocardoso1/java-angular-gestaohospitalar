import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPacienteComponent } from './cadastro-paciente.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroPacienteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroPacienteComponent
  ]
})
export class CadastroPacienteModule { }
