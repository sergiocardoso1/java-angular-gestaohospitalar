import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cidade } from 'src/app/models/cidadeModel';
import { endereco } from 'src/app/models/enderecoModel';
import { estado } from 'src/app/models/estadoModel';
import { Paciente } from 'src/app/models/pacienteModel';
import { Prontuario } from 'src/app/models/prontuarioModel';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';
import { PdfService } from 'src/app/services/pdfService/pdf.service';

@Component({
  selector: 'app-card-exibicao-paciente',
  templateUrl: './card-exibicao-paciente.component.html',
  styleUrls: ['./card-exibicao-paciente.component.css']
})
export class CardExibicaoPacienteComponent implements OnInit{
  [x: string]: any;
  
    paciente: Paciente;
    prontuario: Prontuario | any;
    paramValue:number | any;
    endereco: endereco;
    cidade: cidade;
    estado: estado;
  
  
    constructor(private pacienteService:PacienteService, private pdfService:PdfService, private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
      this.estado = {
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

  
  
      this.paciente = {
        id:this.paramValue,
        nome: "",
        email: "",
        cpf: "",
        convenio: "",
        dataDeNascimento: "",
        telefone: "",
        endereco: this.endereco,
        prontuario: this.prontuario || null,
        informacoesMedicas: ""
      }
  
    }
  
  
  
    ngOnInit(): void {
      this.pacienteService.findId(this.paramValue).subscribe(data => {
        this.estado = data.endereco.cidade.estado;
        this.cidade = data.endereco.cidade;
        this.endereco = data.endereco;
        this.prontuario = data.prontuario
        this.paciente = data;
      });
  
    }
  
    deleteAluno(id:number){
      this.pacienteService.delete(id).subscribe(
        () => {
          console.log('Paciente excluído com sucesso!');
          this.router.navigate(['/pacientes']);
        },
        error => {
          console.error('Erro ao excluir o paciente:', error);
          
        }
      );
    }

    alerta(){
      alert("Prontuario ainda não foi cadastrado!"); 
    }
  
    gerarPDF(){
      this.pdfService.findPDFByPaciente(this.paramValue).subscribe((pdfBlob: Blob) => {
        const fileURL = URL.createObjectURL(pdfBlob);
  
        // Abre o PDF em uma nova aba ou janela
        window.open(fileURL, '_blank');
  
        // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
        setTimeout(() => URL.revokeObjectURL(fileURL), 100);
      });
  }
}