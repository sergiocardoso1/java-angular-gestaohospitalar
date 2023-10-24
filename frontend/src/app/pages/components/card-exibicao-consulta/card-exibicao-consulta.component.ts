import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cidade } from 'src/app/models/cidadeModel';
import { consulta } from 'src/app/models/consultaModel';
import { endereco } from 'src/app/models/enderecoModel';
import { estado } from 'src/app/models/estadoModel';
import { Paciente } from 'src/app/models/pacienteModel';
import { Prontuario } from 'src/app/models/prontuarioModel';
import { ProntuarioNewDTO } from 'src/app/models/prontuarioNewDTO';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';
import { ProntuarioService } from 'src/app/services/prontuarioService/prontuario.service';

@Component({
  selector: 'app-card-exibicao-consulta',
  templateUrl: './card-exibicao-consulta.component.html',
  styleUrls: ['./card-exibicao-consulta.component.css']
})
export class CardExibicaoConsultaComponent implements OnInit{
  [x: string]: any;
  
    consulta!: consulta;
    paramValue:number | any;
 
  
  
    constructor(private consultaService:ConsultaService, private prontuarioService:ProntuarioService ,private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
    
      this.consultaService.findId(this.paramValue).subscribe(data => {
        this.consulta = data;
      })

    }

    criarProntuario(){
      var objDto:ProntuarioNewDTO = {
        pacienteId : this.consulta.paciente.id,

      }
      this.prontuarioService.create(objDto).subscribe(data => {
        alert("Prontuário criado! Clique novamente para abri-lo")
        window.location.reload();
      })
    }
  
  
  
    ngOnInit(): void {
  
  
    }
  
  
  
  }
  