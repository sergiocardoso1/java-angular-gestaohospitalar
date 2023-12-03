import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cep } from 'src/app/models/cep';
import { PacienteDTO } from 'src/app/models/pacienteDTO';
import { CepService } from 'src/app/services/cepservice/cep.service';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';

@Component({
  selector: 'app-card-edicao-paciente',
  templateUrl: './card-edicao-paciente.component.html',
  styleUrls: ['./card-edicao-paciente.component.css']
})
export class CardEdicaoPacienteComponent implements OnInit{
  
  paramValue:number | any;
  id:number|any;
  cepText:string = '';
  endereco:cep | any;
  cidade:string = '';
  estado:string = '';
  bairro:string = '';
  nome:string = '';
  email:string = '';
  telefone:string = '';
  cpf:string = '';
  convenio:string = '';
  dataDeNascimento:string = '';
  logradouro:string = '';
  complemento:string = '';
  numero:string = '';
  informacoesMedicas:string = '';




  cepForm: FormGroup | any;

  constructor(private cepService:CepService, private pacienteService:PacienteService,
     private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cepForm = this.formBuilder.group({
      numericInput: ['', Validators.pattern('[0-9]*')]
    });
    this.pacienteService.findId(this.paramValue).subscribe(data => {
      this.id = data.id;
      this.nome = data.nome;
      this.email = data.email;
      this.telefone = data.telefone;
      this.cpf = data.cpf;
      this.convenio = data.convenio;
      this.dataDeNascimento = this.convertDateToAngularFormat(data.dataDeNascimento);
      this.cepText = data.endereco.cep;
      this.logradouro = data.endereco.logradouro;
      this.numero = data.endereco.numero;
      this.complemento = data.endereco.complemento;
      this.bairro = data.endereco.bairro;
      this.cidade = data.endereco.cidade.nome;
      this.estado = data.endereco.cidade.estado.nome;
      this.informacoesMedicas = data.informacoesMedicas;

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
      !this.cpf ||
      !this.dataDeNascimento ||
      !this.convenio ||
      !this.cepText ||
      !this.bairro ||
      !this.cidade ||
      !this.estado ||
      !this.logradouro ||
      !this.numero
    ) {
      alert('Preencha todos os campos antes de editar um usuário!');
      return;
    } else{
      var objDto:PacienteDTO = {
        id:this.id,
        nome:this.nome,
        email: this.email,
        convenio : this.convenio,
        dataDeNascimento: this.dataDeNascimento.replace(/-/g, "/"),
        cep: this.cepText,
        cidade: this.cidade,
        complemento: this.complemento,
        estado: this.estado,
        bairro: this.bairro,
        logradouro: this.logradouro,
        numero: this.numero,
        telefone: this.telefone,
        informacoesMedicas: this.informacoesMedicas
      }
      this.pacienteService.update(objDto, this.id).subscribe(
        response => {
          this.router.navigate(['/pacientes/',this.id]);
        }
      );


    }
  }


  convertDateToAngularFormat(date: string): string {
    const formattedDate = date.replace(/\//g, "-");
    const parts = formattedDate.split('-');
    const year = parts[2].padStart(4, '0');
    const month = parts[1].padStart(2, '0');
    const day = parts[0].padStart(2, '0');
    const convertedDate = `${year}-${month}-${day}`;
    return convertedDate;
  }



}
