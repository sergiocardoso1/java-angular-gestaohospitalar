import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosComponent } from './relatorios.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    RelatoriosComponent
  ]
})
export class RelatoriosModule { }
