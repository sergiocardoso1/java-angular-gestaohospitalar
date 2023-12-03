import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/authGuardService/AuthGuard';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';
import { EspecialidadeComponent } from './pages/especialidade/especialidade.component';
import { CadastroEspecialidadeComponent } from './pages/cadastro-especialidade/cadastro-especialidade.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { ExibicaoPacienteComponent } from './pages/exibicao-paciente/exibicao-paciente.component';
import { EdicaoPacienteComponent } from './pages/edicao-paciente/edicao-paciente.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CadastroFuncionarioComponent } from './pages/cadastro-funcionario/cadastro-funcionario.component';
import { CardExibirFuncionarioComponent } from './pages/components/card-exibir-funcionario/card-exibir-funcionario.component';
import { EdicaoFuncionarioComponent } from './pages/edicao-funcionario/edicao-funcionario.component';
import { ProcedimentosComponent } from './pages/procedimentos/procedimentos.component';
import { CadastroProcedimentoComponent } from './pages/cadastro-procedimento/cadastro-procedimento.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { VerificarConsultaComponent } from './pages/verificar-consulta/verificar-consulta.component';
import { MarcarConsultaComponent } from './pages/marcar-consulta/marcar-consulta.component';
import { CadastroConsultaComponent } from './pages/cadastro-consulta/cadastro-consulta.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { VerificarProcedimentoComponent } from './pages/verificar-procedimento/verificar-procedimento.component';
import { MarcarProcedimentoComponent } from './pages/marcar-procedimento/marcar-procedimento.component';
import { CadastroServicoDeProcedimentoComponent } from './pages/cadastro-servico-de-procedimento/cadastro-servico-de-procedimento.component';
import { AgendaProcedimentoComponent } from './pages/agenda-procedimento/agenda-procedimento.component';
import { ExibirProntuarioComponent } from './pages/exibir-prontuario/exibir-prontuario.component';
import { ExibicaoConsultaComponent } from './pages/exibicao-consulta/exibicao-consulta.component';
import { ExibicaoConsultaPacienteComponent } from './pages/exibicao-consulta-paciente/exibicao-consulta-paciente.component';
import { CadastroLaudoComponent } from './pages/cadastro-laudo/cadastro-laudo.component';
import { ExibicaoLaudoComponent } from './pages/exibicao-laudo/exibicao-laudo.component';
import { ExibicaoSelecaoFuncionarioComponent } from './pages/exibicao-selecao-funcionario/exibicao-selecao-funcionario.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ExibirProcedimentoComponent } from './pages/exibir-procedimento/exibir-procedimento.component';


const routes: Routes = [
  {path:'login', component: LoginComponent, pathMatch:"full"},
  {path:'recuperarsenha', component: EsqueceuSenhaComponent, pathMatch:"full"},
  {path:'home', component: HomeComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'agenda', component: AgendaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'agenda/consultas', component: ConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'agenda/procedimentos', component: AgendaProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'verificarconsulta', component: VerificarConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'verificarprocedimento', component: VerificarProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimento/:procedimentoselecionado/data/:data', component: MarcarProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimento/:procedimentoselecionado/data/:data/horario/:horario', component: CadastroServicoDeProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consulta/especialidade/:especialidadeselecionada/data/:data', component: MarcarConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consulta/medico/:medicoid/data/:data/horario/:horario', component: CadastroConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consultas/:id', component: ExibicaoConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consultas/paciente/:id', component: ExibicaoConsultaPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consultas/:id/cadastrolaudo', component: CadastroLaudoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'laudos/:id', component: ExibicaoLaudoComponent , pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes', component: PacientesComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes/cadastro', component: CadastroPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes/:id/editar', component: EdicaoPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes/:id', component: ExibicaoPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'prontuarios/:id', component: ExibirProntuarioComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'especialidades/cadastro', component: CadastroEspecialidadeComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'especialidades', component: EspecialidadeComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimentos/cadastro', component: CadastroProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimentos', component: ProcedimentosComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimento/:id', component: ExibirProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios', component: FuncionariosComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios/cadastro', component: CadastroFuncionarioComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios/:id/editar', component: EdicaoFuncionarioComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios/:id', component: ExibicaoSelecaoFuncionarioComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'relatorios', component: RelatoriosComponent , pathMatch:"full", canActivate: [AuthGuard] },



  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
