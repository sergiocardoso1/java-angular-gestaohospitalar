import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroLaudoComponent } from './cadastro-laudo.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroLaudoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroLaudoComponent
  ]
})
export class CadastroLaudoModule { }
