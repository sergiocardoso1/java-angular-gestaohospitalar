import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEspecialidadeComponent } from './cadastro-especialidade.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroEspecialidadeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    CadastroEspecialidadeComponent
  ]
})
export class CadastroEspecialidadeModule { }
