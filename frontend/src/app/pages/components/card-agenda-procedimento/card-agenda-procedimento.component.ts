import { Component, OnInit } from '@angular/core';
import { ProcedimentoMarcar } from 'src/app/models/procedimentoMarcarModel';
import { ServicoProcedimentoService } from 'src/app/services/servicoProcedimentoService/servico-procedimento.service';

@Component({
  selector: 'app-card-agenda-procedimento',
  templateUrl: './card-agenda-procedimento.component.html',
  styleUrls: ['./card-agenda-procedimento.component.css']
})
export class CardAgendaProcedimentoComponent implements OnInit{

  servicoProcedimento: ProcedimentoMarcar[] = [];
  date:string = "";
  constructor(private servicoProcedimentoService:ServicoProcedimentoService){
    const currentDate = new Date();
    const datePart = currentDate.toISOString().split('T')[0];
    this.servicoProcedimentoService.findByDate(datePart).subscribe(data => {
      this.servicoProcedimento = data;

    });

    this.date = datePart;
    


  }

  findByDate(){
    if(this.date != "" || this.date != null){
      this.servicoProcedimentoService.findByDate(this.date).subscribe(data => {
        this.servicoProcedimento = data;

      });
    }else{
      this.servicoProcedimentoService.findAll().subscribe(data => {
        this.servicoProcedimento = data;
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