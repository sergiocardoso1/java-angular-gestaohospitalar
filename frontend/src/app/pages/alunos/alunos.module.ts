import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    AlunosComponent
  ]
})
export class AlunosModule { }
