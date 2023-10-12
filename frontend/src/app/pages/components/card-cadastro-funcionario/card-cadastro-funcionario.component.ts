import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cep } from 'src/app/models/cep';
import { especialidade } from 'src/app/models/especialidadeModel';
import { funcionarioNewDTO } from 'src/app/models/funcionarioNewDTO';
import { CepService } from 'src/app/services/cepservice/cep.service';
import { EspecialidadeService } from 'src/app/services/especialidadeService/especialidade.service';
import { FuncionarioService } from 'src/app/services/funcionarioService/funcionario.service';

@Component({
  selector: 'app-card-cadastro-funcionario',
  templateUrl: './card-cadastro-funcionario.component.html',
  styleUrls: ['./card-cadastro-funcionario.component.css']
})
export class CardCadastroFuncionarioComponent implements OnInit{
  cepText:string = '';
  endereco:cep | any;
  cidade:string = '';
  estado:string = '';
  bairro:string = '';
  nome:string = '';
  email:string = '';
  senha:string = '';
  telefone:string = '';
  crm:string = '';
  dataDeAdmissao:string = '';
  logradouro:string = '';
  complemento:string = '';
  numero:string = '';
  especialidade: especialidade[] = [];
  tipoPerfilMap: Map<string, number> = new Map([
    ["ADMIN", 1],
    ["MEDICO", 2],
    ["SECRETARIO", 3],
    ["FUNCIONARIO", 4]
  ]);

  especialidadeSelecionada: any | number;
  perfilSelecionado: number | any;





  cepForm: FormGroup | any;

  constructor(private cepService:CepService, private funcionarioService:FuncionarioService, private especialidadeService:EspecialidadeService,
     private formBuilder: FormBuilder, private router: Router){

      this.especialidadeService.findAll().subscribe(data =>{
        this.especialidade = data;
      })
  }

  ngOnInit(): void {
    this.cepForm = this.formBuilder.group({
      numericInput: ['', Validators.pattern('[0-9]*')]
    });

    this.perfilSelecionado = -1;
    this.especialidadeSelecionada = -1;
  }

  buscarCep(){
    const validacep = /^[0-9]{8}$/;

    if(this.cepText!==""){
      if(validacep.test(this.cepText)){

        this.cepService.consultaCep(this.cepText).subscribe(
          data => {
            this.endereco = data;
            this.estado = data.uf;
            this.cidade = data.localidade;
            this.bairro = data.bairro;
            console.log(this.endereco)
          }
        );
      }else{
        alert("cep inválido!");
        this.cepText = "";
        this.estado = "";
        this.cidade = "";
        this.bairro = "";
      }

    }
  }

  cadastrar(){

    
    

    if (
      !this.nome ||
      !this.crm ||
      !this.dataDeAdmissao ||
      !this.cepText ||
      !this.bairro ||
      !this.cidade ||
      !this.estado ||
      !this.logradouro ||
      !this.especialidade ||
      !this.numero ||
      !this.senha ||
      !this.perfilSelecionado
    ) {
      alert('Preencha todos os campos antes de cadastrar um funcionario!');
      return;
    } else{

      var objDto:funcionarioNewDTO = {
        nome:this.nome,
        crm: this.crm,
        email: this.email,
        senha: this.senha,
        dataDeAdmissao: this.dataDeAdmissao.replace(/-/g, "/"),
        cep: this.cepText,
        cidade: this.cidade,
        complemento: this.complemento,
        estado: this.estado,
        bairro: this.bairro,
        logradouro: this.logradouro,
        numero: this.numero,
        telefone: this.telefone,
        especialidade: this.especialidadeSelecionada,
        perfis: this.perfilSelecionado

        
      }
      console.log(this.funcionarioService.create(objDto).subscribe(
        response => {
          this.router.navigate(['/funcionarios']);
          console.log(response);
        }
      ));
    }
  


  }




}
