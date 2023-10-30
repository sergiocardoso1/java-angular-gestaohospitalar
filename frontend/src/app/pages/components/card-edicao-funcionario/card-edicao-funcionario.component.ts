import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cep } from 'src/app/models/cep';
import { especialidade } from 'src/app/models/especialidadeModel';
import { funcionarioDTO } from 'src/app/models/funcionarioDTO copy';
import { CepService } from 'src/app/services/cepservice/cep.service';
import { EspecialidadeService } from 'src/app/services/especialidadeService/especialidade.service';
import { FuncionarioService } from 'src/app/services/funcionarioService/funcionario.service';

@Component({
  selector: 'app-card-edicao-funcionario',
  templateUrl: './card-edicao-funcionario.component.html',
  styleUrls: ['./card-edicao-funcionario.component.css']
})
export class CardEdicaoFuncionarioComponent implements OnInit{
  paramValue:number | any;
  id:any|number;
  cepText:string = '';
  endereco:cep | any;
  cidade:string = '';
  estado:string = '';
  cpf:string = '';
  bairro:string = '';
  nome:string = '';
  email:string = '';
  senha:string = '';
  telefone:string = '';
  crm:string = '';
  dataDeAdmissao:string = '';
  dataDeDemissao:any | string = '';
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
     private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,){
      this.paramValue = this.route.snapshot.paramMap.get('id');

      this.especialidadeService.findAll().subscribe(data =>{
        this.especialidade = data;
      })
      
      this.funcionarioService.findId(this.paramValue).subscribe(data =>{
        this.id = data.id;
        this.nome = data.nome;
        this.email = data.email;
        this.telefone = data.telefone;
        this.cpf = data.cpf;
        this.crm = data.crm;
        this.cepText = data.endereco.cep;
        this.logradouro = data.endereco.logradouro;
        this.numero = data.endereco.numero;
        this.complemento = data.endereco.complemento;
        this.dataDeAdmissao = this.convertDateToAngularFormat(data.dataDeAdmissao);
        
        this.bairro = data.endereco.bairro;
        this.cidade = data.endereco.cidade.nome;
        this.estado = data.endereco.cidade.estado.nome;
        this.perfilSelecionado = data.perfis;
        
        if(data.especialidade != null){
          this.especialidadeSelecionada = data.especialidade.id;
        }else{
          this.especialidadeSelecionada = -1;
        }
        if(data.perfis == "ADMIN"){
          this.perfilSelecionado = 1;
        }else if(data.perfis == "MEDICO"){
          this.perfilSelecionado = 2;
        }else if(data.perfis == "SECRETARIO"){
          this.perfilSelecionado = 3;
        }else if(data.perfis == "FUNCIONARIO"){
          this.perfilSelecionado = 4;
        }

        this.dataDeDemissao = this.convertDateToAngularFormat(data.dataDeDemissao);
      })

      
  }

  ngOnInit(): void {
    this.cepForm = this.formBuilder.group({
      numericInput: ['', Validators.pattern('[0-9]*')]
    });

    
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

  editar(){

    
    

    if (
      !this.nome ||
      !this.dataDeAdmissao ||
      !this.cepText ||
      !this.bairro ||
      !this.cidade ||
      !this.estado ||
      !this.logradouro ||
      !this.especialidade ||
      !this.numero 
    ) {
      alert('Preencha todos os campos antes de cadastrar um funcionario!');
      return;
    } else{

      var objDto:funcionarioDTO = {
        id:this.id,
        nome:this.nome,
        crm: this.crm,
        email: this.email,
        dataDeAdmissao: this.dataDeAdmissao.replace(/-/g, "/"),
        dataDeDemissao: (this.dataDeDemissao !== "") ? this.dataDeDemissao.replace(/-/g, "/") : "",
        cep: this.cepText,
        cidade: this.cidade,
        complemento: this.complemento,
        estado: this.estado,
        bairro: this.bairro,
        logradouro: this.logradouro,
        numero: this.numero,
        telefone: this.telefone,
        especialidade: (this.especialidadeSelecionada !== -1) ? this.especialidadeSelecionada : null,
        perfis: this.perfilSelecionado

        
      }

      console.log(this.funcionarioService.update(objDto, this.paramValue).subscribe(
        response => {
          this.router.navigate(['/funcionarios']);
          console.log(response);
        }
      ));
    }
  


  }

  convertDateToAngularFormat(date: string): string {
    if(date != null || date != ""){
      const formattedDate = date.replace(/\//g, "-");
      const parts = formattedDate.split('-');
      const year = parts[2].padStart(4, '0');
      const month = parts[1].padStart(2, '0');
      const day = parts[0].padStart(2, '0');
      const convertedDate = `${year}-${month}-${day}`;
      return convertedDate;
    }else{
      return "";
    }
    
  }




}
