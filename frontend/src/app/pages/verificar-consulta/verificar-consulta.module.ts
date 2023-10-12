import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificarConsultaComponent } from './verificar-consulta.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    VerificarConsultaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    VerificarConsultaComponent
  ]
})
export class VerificarConsultaModule { }
