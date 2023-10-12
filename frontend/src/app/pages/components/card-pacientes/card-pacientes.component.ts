import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/pacienteModel';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';

@Component({
  selector: 'app-card-pacientes',
  templateUrl: './card-pacientes.component.html',
  styleUrls: ['./card-pacientes.component.css']
})
export class CardPacientesComponent  implements OnInit{

  pacientes: Paciente[] = [];
  nameInput:string = "";
  constructor(private pacienteService:PacienteService){

    this.pacienteService.findAll().subscribe(data => {
      this.pacientes = data;
    })


  }

  findName(){
    if(this.nameInput != "" || this.nameInput.length > 0){
      this.pacienteService.findName(this.nameInput).subscribe(data => {
        this.pacientes = data;

      });
    }else{
      this.pacienteService.findAll().subscribe(data => {
        this.pacientes = data;
      })
    }

  }

  ngOnInit(): void {

  }



}
