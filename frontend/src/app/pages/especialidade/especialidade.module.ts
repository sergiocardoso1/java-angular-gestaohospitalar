import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadeComponent } from './especialidade.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    EspecialidadeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    EspecialidadeComponent
  ]
})
export class EspecialidadeModule { }
