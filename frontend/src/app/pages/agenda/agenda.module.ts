import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    AgendaComponent
  ]
})
export class AgendaModule { }
