import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsqueceuSenhaComponent } from './esqueceu-senha.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    EsqueceuSenhaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    EsqueceuSenhaComponent
  ]
})
export class EsqueceuSenhaModule { }
