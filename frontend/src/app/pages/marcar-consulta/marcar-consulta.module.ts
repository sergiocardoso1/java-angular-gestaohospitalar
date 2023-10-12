import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcarConsultaComponent } from './marcar-consulta.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MarcarConsultaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    MarcarConsultaComponent
  ]
})
export class MarcarConsultaModule { }
