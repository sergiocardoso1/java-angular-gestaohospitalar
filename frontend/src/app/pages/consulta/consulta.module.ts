import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ConsultaComponent
  ]
})
export class ConsultaModule { }
