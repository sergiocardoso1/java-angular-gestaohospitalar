import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoLaudoComponent } from './exibicao-laudo.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ExibicaoLaudoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ExibicaoLaudoComponent
  ]
})
export class ExibicaoLaudoModule { }
