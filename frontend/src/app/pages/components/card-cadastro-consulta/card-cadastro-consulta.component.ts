import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consultaNewDTO } from 'src/app/models/consultaNewDTO';
import { funcionarioNewDTO } from 'src/app/models/funcionarioNewDTO';
import { Paciente } from 'src/app/models/pacienteModel';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';

@Component({
  selector: 'app-card-cadastro-consulta',
  templateUrl: './card-cadastro-consulta.component.html',
  styleUrls: ['./card-cadastro-consulta.component.css']
})
export class CardCadastroConsultaComponent implements OnInit{

  paramValueIdMedico:number | any;
  paramValueHorario:string | any;
  paramValueData:string | any;
  pacientes: Paciente[] = [];
  nameInput:string = "";
  valor:number | any;
  constructor(private pacienteService:PacienteService, private consultaService:ConsultaService, private router: Router, private route: ActivatedRoute){
    this.paramValueHorario = this.route.snapshot.paramMap.get('horario');
    this.paramValueData = this.route.snapshot.paramMap.get('data');
    this.paramValueIdMedico = this.route.snapshot.paramMap.get('medicoid');

  }

  findName(){
    if(this.nameInput != "" || this.nameInput.length > 0){
      this.pacienteService.findName(this.nameInput).subscribe(data => {
        this.pacientes = data;

      });
    }

  }

  ngOnInit(): void {

  }

  cadastrar(pacienteId:number){
    var objDto:consultaNewDTO = {
      medicoId:this.paramValueIdMedico,
      dataConsulta:this.paramValueData.replace(/-/g, "/"),
      horarioConsulta:this.paramValueHorario,
      pacienteId:pacienteId,
      valor:this.valor

      
    }

    if(this.valor != null){
      this.consultaService.create(objDto).subscribe(
        response => {
          this.router.navigate(['/home']);
          alert("Consulta realizada com sucesso!")
        },
        error => {
          alert('Erro ao registrar consulta!');
        }
      )
    }else{
      alert('Erro ao registrar consulta! Verifique todos campos');
    }

    
  }


}
