import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }
