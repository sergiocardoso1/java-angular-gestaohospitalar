import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/pacienteModel';
import { ProcedimentoMarcarNewDTO } from 'src/app/models/procedimentoMarcarNewDTO';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';
import { ServicoProcedimentoService } from 'src/app/services/servicoProcedimentoService/servico-procedimento.service';

@Component({
  selector: 'app-card-cadastro-servico-procedimento',
  templateUrl: './card-cadastro-servico-procedimento.component.html',
  styleUrls: ['./card-cadastro-servico-procedimento.component.css']
})
export class CardCadastroServicoProcedimentoComponent implements OnInit{

  paramValueId:number | any;
  paramValueHorario:string | any;
  paramValueData:string | any;
  pacientes: Paciente[] = [];
  nameInput:string = "";
  valor:number | any;
  constructor(private pacienteService:PacienteService, private servicoProcedimento:ServicoProcedimentoService, private router: Router, private route: ActivatedRoute){
    this.paramValueHorario = this.route.snapshot.paramMap.get('horario');
    this.paramValueData = this.route.snapshot.paramMap.get('data');
    this.paramValueId = this.route.snapshot.paramMap.get('procedimentoselecionado');

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
    var objDto:ProcedimentoMarcarNewDTO = {
      procedimentoId:this.paramValueId,
      dataProcedimento:this.paramValueData.replace(/-/g, "/"),
      horarioProcedimento:this.paramValueHorario,
      pacienteId:pacienteId,
      valor:this.valor

      
    }

    if(this.valor != null){
      this.servicoProcedimento.create(objDto).subscribe(
        response => {
          this.router.navigate(['/home']);
          alert("Procedimento cadastrado com sucesso!")
        },
        error => {
          alert('Erro ao registrar consulta!');
        }
      )
    }else{
      alert('Erro ao registrar procedimento! Verifique todos campos');
    }

    
  }


}
