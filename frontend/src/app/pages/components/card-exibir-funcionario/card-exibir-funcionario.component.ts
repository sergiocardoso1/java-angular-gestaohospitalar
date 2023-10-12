import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cidade } from 'src/app/models/cidadeModel';
import { endereco } from 'src/app/models/enderecoModel';
import { especialidade } from 'src/app/models/especialidadeModel';
import { estado } from 'src/app/models/estadoModel';
import { funcionario } from 'src/app/models/funcionarioModel';
import { FuncionarioService } from 'src/app/services/funcionarioService/funcionario.service';

@Component({
  selector: 'app-card-exibir-funcionario',
  templateUrl: './card-exibir-funcionario.component.html',
  styleUrls: ['./card-exibir-funcionario.component.css']
})
export class CardExibirFuncionarioComponent implements OnInit{
  [x: string]: any;
  
    funcionario: funcionario;
    paramValue:number | any;
    endereco: endereco;
    cidade: cidade;
    estado: estado;
    perfis: string = "";
    especialidade: especialidade;
  
  
    constructor(private funcionarioService:FuncionarioService, private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
      this.estado = {
        id:0,
        nome:""
      }

      this.especialidade = {
        id:0,
        nome:""
      }
  
      this.cidade = {
        id:0,
        nome:"",
        estado: this.estado
      }
  
  
      this.endereco = {
        id:0,
        logradouro: "",
        numero:	"",
        cep:	"",
        bairro:	"",
        complemento: "",
        cidade: this.cidade
      }

      
  
      this.funcionario = {
        id:this.paramValue,
        nome: "",
        email: "",
        cpf: "",
        crm: "",
        dataDeAdmissao: "",
        dataDeDemissao: "",
        telefone: "",
        perfis: "",
        endereco: this.endereco,
        especialidade: this.especialidade

        
      }
  
    }
  
  
  
    ngOnInit(): void {
      this.funcionarioService.findId(this.paramValue).subscribe(data => {
        this.estado = data.endereco.cidade.estado;
        this.cidade = data.endereco.cidade;
        this.endereco = data.endereco;
        this.especialidade = data.especialidade
        this.funcionario = data;
      });
  
    }
  
    deleteAluno(id:number){
      this.funcionarioService.delete(id).subscribe(
        () => {
          console.log('Funcionário excluído com sucesso!');
          this.router.navigate(['/pacientes']);
        },
        error => {
          console.error('Erro ao excluir o funcionario:', error);
          
        }
      );
    }
  
  
  }
  