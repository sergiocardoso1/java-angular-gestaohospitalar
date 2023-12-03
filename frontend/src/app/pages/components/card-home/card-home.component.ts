import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';
import { PacienteService } from 'src/app/services/pacienteService/paciente.service';
import { ProcedimentoService } from 'src/app/services/procedimentoService/procedimento.service';
import { ServicoProcedimentoService } from 'src/app/services/servicoProcedimentoService/servico-procedimento.service';


@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {
  title:string = "CLILIFE";
  pacientes:string = "";
  procedimentos:string = "";
  procedimentosHoje:string = "";
  consultasHoje:string = "";
  consultasDoMes:string[] = [];
  procedimentosDoMes:string[] = [];
  currentDate: Date = new Date();
  datePipe: DatePipe = new DatePipe('en-US');

  constructor(private pacienteService:PacienteService, private procedimentoService:ProcedimentoService, private servicoProcedimentoService:ServicoProcedimentoService,
  private consultaService:ConsultaService){
    this.pacienteService.findQuantidade().subscribe(data =>{
      this.pacientes = data.toString();
    });
    this.procedimentoService.findQuantidade().subscribe(data =>{
      this.procedimentos = data.toString();
    });
    this.servicoProcedimentoService.findQuantidadeHoje().subscribe(data =>{
      this.procedimentosHoje = data.toString();
    });
    this.consultaService.findQuantidadeHoje().subscribe(data =>{
      this.consultasHoje = data.toString();
    });

    this.consultaService.findDoMes().subscribe(data => {
      this.consultasDoMes = data;
    })

    this.servicoProcedimentoService.findDoMes().subscribe(data => {
      this.procedimentosDoMes = data;
    })
  }
  formattedDate: string | null = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy') || null;


}
