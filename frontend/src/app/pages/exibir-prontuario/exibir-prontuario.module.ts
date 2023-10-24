import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibirProntuarioComponent } from './exibir-prontuario.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibirProntuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibirProntuarioComponent
  ]
})
export class ExibirProntuarioModule { }
