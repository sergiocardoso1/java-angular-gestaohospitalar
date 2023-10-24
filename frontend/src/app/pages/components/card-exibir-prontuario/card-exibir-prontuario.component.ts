import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/pacienteModel';
import { Prontuario } from 'src/app/models/prontuarioModel';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';
import { ProntuarioService } from 'src/app/services/prontuarioService/prontuario.service';

@Component({
  selector: 'app-card-exibir-prontuario',
  templateUrl: './card-exibir-prontuario.component.html',
  styleUrls: ['./card-exibir-prontuario.component.css']
})
export class CardExibirProntuarioComponent implements OnInit{
  [x: string]: any;

    paramValue:number | any;
    prontuario!: Prontuario;
    paciente!: Paciente;
  
  
  
    constructor(private prontuarioService:ProntuarioService, private pacienteService:PacienteService ,private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
      this.prontuarioService.findId(this.paramValue).subscribe(data => {
        this.prontuario = data;
      })
      this.pacienteService.findByProntuario(this.paramValue).subscribe(data =>{
        this.paciente = data;
      })

  
    }
  
  
  
    ngOnInit(): void {
      this.prontuarioService.findId(this.paramValue).subscribe(data => {
       
      });
  
    }

  
  
  }
  