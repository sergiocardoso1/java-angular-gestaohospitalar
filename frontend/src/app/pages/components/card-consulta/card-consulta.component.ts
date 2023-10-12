import { Component, OnInit } from '@angular/core';
import { consulta } from 'src/app/models/consultaModel';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';

@Component({
  selector: 'app-card-consulta',
  templateUrl: './card-consulta.component.html',
  styleUrls: ['./card-consulta.component.css']
})
export class CardConsultaComponent implements OnInit{

  consultas: consulta[] = [];
  date:string = "";
  constructor(private consultaService:ConsultaService){
    const currentDate = new Date();
    const datePart = currentDate.toISOString().split('T')[0];
    this.consultaService.findByDate(datePart).subscribe(data => {
      this.consultas = data;

    });

    this.date = datePart;
    


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