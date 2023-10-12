import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroConsultaComponent } from './cadastro-consulta.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroConsultaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroConsultaComponent
  ]
})
export class CadastroConsultaModule { }
