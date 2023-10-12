import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cep } from 'src/app/models/cep';
import { PacienteNewDTO } from 'src/app/models/pacienteNewDTO';
import { CepService } from 'src/app/services/cepservice/cep.service';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';

@Component({
  selector: 'app-card-cadastro-paciente',
  templateUrl: './card-cadastro-paciente.component.html',
  styleUrls: ['./card-cadastro-paciente.component.css']
})
export class CardCadastroPacienteComponent implements OnInit{
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




  cepForm: FormGroup | any;

  constructor(private cepService:CepService, private pacienteService:PacienteService ,
     private formBuilder: FormBuilder, private router: Router){
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

  cadastrarAluno(){

    
    

    if (
      !this.nome ||
      !this.cpf ||
      !this.dataDeNascimento ||
      !this.cepText ||
      !this.bairro ||
      !this.cidade ||
      !this.estado ||
      !this.logradouro ||
      !this.convenio ||
      !this.numero
    ) {
      alert('Preencha todos os campos antes de cadastrar um usuário!');
      return;
    } else{

      var objDto:PacienteNewDTO = {
        nome:this.nome,
        cpf: this.cpf,
        email: this.email,
        dataDeNascimento: this.dataDeNascimento.replace(/-/g, "/"),
        cep: this.cepText,
        cidade: this.cidade,
        complemento: this.complemento,
        estado: this.estado,
        bairro: this.bairro,
        logradouro: this.logradouro,
        numero: this.numero,
        telefone: this.telefone,
        convenio: this.convenio
      }
      console.log(this.pacienteService.create(objDto).subscribe(
        response => {
          this.router.navigate(['/pacientes']);
          console.log(response);
        }
      ));
    }
  


  }




}
