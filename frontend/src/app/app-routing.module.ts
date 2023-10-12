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

const routes: Routes = [
  {path:'login', component: LoginComponent, pathMatch:"full"},
  {path:'recuperarsenha', component: EsqueceuSenhaComponent, pathMatch:"full"},
  {path:'home', component: HomeComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'agenda', component: AgendaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'verificarconsulta', component: VerificarConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consultas', component: ConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consulta/especialidade/:especialidadeselecionada/data/:data', component: MarcarConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'consulta/medico/:medicoid/data/:data/horario/:horario', component: CadastroConsultaComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes', component: PacientesComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes/cadastro', component: CadastroPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes/:id/editar', component: EdicaoPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'pacientes/:id', component: ExibicaoPacienteComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'especialidades/cadastro', component: CadastroEspecialidadeComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'especialidades', component: EspecialidadeComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimentos/cadastro', component: CadastroProcedimentoComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'procedimentos', component: ProcedimentosComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios', component: FuncionariosComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios/cadastro', component: CadastroFuncionarioComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios/:id/editar', component: EdicaoFuncionarioComponent, pathMatch:"full", canActivate: [AuthGuard] },
  {path:'funcionarios/:id', component: CardExibirFuncionarioComponent, pathMatch:"full", canActivate: [AuthGuard] },



  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }