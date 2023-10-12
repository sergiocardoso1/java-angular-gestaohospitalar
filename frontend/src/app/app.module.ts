import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './pages/components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';
import { AuthTokenInterceptor } from './services/interceptorService/auth-token.interceptor';
import { EsqueceuSenhaModule } from './pages/esqueceu-senha/esqueceu-senha.module';
import { ExibicaoSelecaoFuncionarioModule } from './pages/exibicao-selecao-funcionario/exibicao-selecao-funcionario.module';
import { CadastroFuncionarioModule } from './pages/cadastro-funcionario/cadastro-funcionario.module';
import { EspecialidadeModule } from './pages/especialidade/especialidade.module';
import { CadastroEspecialidadeModule } from './pages/cadastro-especialidade/cadastro-especialidade.module';
import { PacientesModule } from './pages/pacientes/pacientes.module';
import { CadastroPacienteModule } from './pages/cadastro-paciente/cadastro-paciente.module';
import { ExibicaoPacienteModule } from './pages/exibicao-paciente/exibicao-paciente.module';
import { EdicaoPacienteModule } from './pages/edicao-paciente/edicao-paciente.module';
import { FuncionariosModule } from './pages/funcionarios/funcionarios.module';
import { EdicaoFuncionarioModule } from './pages/edicao-funcionario/edicao-funcionario.module';
import { ProcedimentosModule } from './pages/procedimentos/procedimentos.module';
import { CadastroProcedimentoModule } from './pages/cadastro-procedimento/cadastro-procedimento.module';
import { AgendaModule } from './pages/agenda/agenda.module';
import { VerificarConsultaModule } from './pages/verificar-consulta/verificar-consulta.module';
import { MarcarConsultaModule } from './pages/marcar-consulta/marcar-consulta.module';
import { CadastroConsultaModule } from './pages/cadastro-consulta/cadastro-consulta.module';
import { ConsultaModule } from './pages/consulta/consulta.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    EsqueceuSenhaModule,
    FuncionariosModule,
    ExibicaoSelecaoFuncionarioModule,
    CadastroFuncionarioModule,
    EspecialidadeModule,
    CadastroEspecialidadeModule,
    PacientesModule,
    CadastroPacienteModule,
    ExibicaoPacienteModule,
    EdicaoPacienteModule,
    CadastroFuncionarioModule,
    EdicaoFuncionarioModule,
    ProcedimentosModule,
    CadastroProcedimentoModule,
    AgendaModule,
    VerificarConsultaModule,
    MarcarConsultaModule,
    CadastroConsultaModule,
    ConsultaModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
