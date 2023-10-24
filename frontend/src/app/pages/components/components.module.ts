import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardInfoComponent } from './card-home/card-info/card-info.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardLoginComponent } from './card-login/card-login.component';
import { CardEsqueceuSenhaComponent } from './card-esqueceu-senha/card-esqueceu-senha.component';
import { CardEspecialidadesComponent } from './card-especialidades/card-especialidades.component';
import { CardCadastroEspecialidadeComponent } from './card-cadastro-especialidade/card-cadastro-especialidade.component';
import { CardPacientesComponent } from './card-pacientes/card-pacientes.component';
import { CardExibicaoPacienteComponent } from './card-exibicao-paciente/card-exibicao-paciente.component';
import { CardEdicaoPacienteComponent } from './card-edicao-paciente/card-edicao-paciente.component';
import { CardFuncionariosComponent } from './card-funcionarios/card-funcionarios.component';
import { CardCadastroFuncionarioComponent } from './card-cadastro-funcionario/card-cadastro-funcionario.component';
import { CardEdicaoFuncionarioComponent } from './card-edicao-funcionario/card-edicao-funcionario.component';
import { CardExibirFuncionarioComponent } from './card-exibir-funcionario/card-exibir-funcionario.component';
import { CardProcedimentosComponent } from './card-procedimentos/card-procedimentos.component';
import { CardCadastroProcedimentoComponent } from './card-cadastro-procedimento/card-cadastro-procedimento.component';
import { CardSelecionarAgendaComponent } from './card-selecionar-agenda/card-selecionar-agenda.component';
import { CardVerificarConsultaComponent } from './card-verificar-consulta/card-verificar-consulta.component';
import { CardMarcarConsultaComponent } from './card-marcar-consulta/card-marcar-consulta.component';
import { CardCadastroConsultaComponent } from './card-cadastro-consulta/card-cadastro-consulta.component';
import { CardConsultaComponent } from './card-consulta/card-consulta.component';
import { CardCadastroPacienteComponent } from './card-cadastro-paciente/card-cadastro-paciente.component';
import { CardVerificarProcedimentoComponent } from './card-verificar-procedimento/card-verificar-procedimento.component';
import { CardMarcarProcedimentoComponent } from './card-marcar-procedimento/card-marcar-procedimento.component';
import { CardCadastroServicoProcedimentoComponent } from './card-cadastro-servico-procedimento/card-cadastro-servico-procedimento.component';
import { CardAgendaProcedimentoComponent } from './card-agenda-procedimento/card-agenda-procedimento.component';
import { CardExibirProntuarioComponent } from './card-exibir-prontuario/card-exibir-prontuario.component';
import { CardExibicaoConsultaComponent } from './card-exibicao-consulta/card-exibicao-consulta.component';
import { CardConsultaPacienteComponent } from './card-consulta-paciente/card-consulta-paciente.component';




@NgModule({
  declarations: [
    MenuBarComponent,
    MenuLateralComponent,
    CardHomeComponent,
    CardInfoComponent,
    CardLoginComponent,
    CardEsqueceuSenhaComponent,
    CardEspecialidadesComponent,
    CardCadastroEspecialidadeComponent,
    CardPacientesComponent,
    CardExibicaoPacienteComponent,
    CardEdicaoPacienteComponent,
    CardFuncionariosComponent,
    CardCadastroFuncionarioComponent,
    CardEdicaoFuncionarioComponent,
    CardExibirFuncionarioComponent,
    CardProcedimentosComponent,
    CardCadastroProcedimentoComponent,
    CardSelecionarAgendaComponent,
    CardVerificarConsultaComponent,
    CardMarcarConsultaComponent,
    CardCadastroConsultaComponent,
    CardConsultaComponent,
    CardCadastroPacienteComponent,
    CardVerificarProcedimentoComponent,
    CardMarcarProcedimentoComponent,
    CardCadastroServicoProcedimentoComponent,
    CardAgendaProcedimentoComponent,
    CardExibirProntuarioComponent,
    CardExibicaoConsultaComponent,
    CardConsultaPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    MenuBarComponent,
    MenuLateralComponent,
    CardHomeComponent,
    CardInfoComponent,
    CardLoginComponent,
    HttpClientModule,
    CardEsqueceuSenhaComponent,
    CardEspecialidadesComponent,
    CardCadastroEspecialidadeComponent,
    CardPacientesComponent,
    CardExibicaoPacienteComponent,
    CardEdicaoPacienteComponent,
    CardFuncionariosComponent,
    CardCadastroFuncionarioComponent,
    CardEdicaoFuncionarioComponent,
    CardExibirFuncionarioComponent,
    CardProcedimentosComponent,
    CardCadastroProcedimentoComponent,
    CardSelecionarAgendaComponent,
    CardVerificarConsultaComponent,
    CardMarcarConsultaComponent,
    CardCadastroConsultaComponent,
    CardConsultaComponent,
    CardCadastroPacienteComponent,
    CardVerificarProcedimentoComponent,
    CardMarcarProcedimentoComponent,
    CardCadastroServicoProcedimentoComponent,
    CardAgendaProcedimentoComponent,
    CardExibirProntuarioComponent,
    CardExibicaoConsultaComponent,
    CardConsultaPacienteComponent

  ]
})
export class ComponentsModule { }
