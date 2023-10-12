import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    PacientesComponent
  ]
})
export class PacientesModule { }
