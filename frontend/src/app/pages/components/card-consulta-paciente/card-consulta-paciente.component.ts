import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consulta } from 'src/app/models/consultaModel';
import { Paciente } from 'src/app/models/pacienteModel';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';

@Component({
  selector: 'app-card-consulta-paciente',
  templateUrl: './card-consulta-paciente.component.html',
  styleUrls: ['./card-consulta-paciente.component.css']
})
export class CardConsultaPacienteComponent implements OnInit{

  paciente!: Paciente;
  paramValue: number | any;
  consultas: consulta[] = [];
  date:string = "";
  constructor(private consultaService:ConsultaService, private pacienteService:PacienteService ,private route: ActivatedRoute, private router: Router){
    this.paramValue = this.route.snapshot.paramMap.get('id');
    this.consultaService.findByPaciente(this.paramValue).subscribe(data => {
      this.consultas = data;

    });

    this.pacienteService.findId(this.paramValue).subscribe(data =>{
      this.paciente = data;
    })

    
    


  }

  findByDate(){
    if(this.date != "" || this.date != null){
      this.consultaService.findByDate(this.date).subscribe(data => {
        this.consultas = data;

      });
    }else{
      this.consultaService.findAll().subscribe(data => {
        this.consultas = data;
      })
    }

  }

  ngOnInit(): void {

  }

  transform(value: string): Date {
    const timeParts = value.split(':');
    const date = new Date();
    date.setHours(parseInt(timeParts[0], 10));
    date.setMinutes(parseInt(timeParts[1], 10));
    return date;
  }



}