import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laudo } from 'src/app/models/laudoModel';
import { LaudoService } from 'src/app/services/laudoService/laudo.service';

@Component({
  selector: 'app-card-exibicao-laudo',
  templateUrl: './card-exibicao-laudo.component.html',
  styleUrls: ['./card-exibicao-laudo.component.css']
})
export class CardExibicaoLaudoComponent implements OnInit{


    paramValue:number | any;
    laudo!: Laudo;
  
  
  
    constructor(private laudoService:LaudoService ,private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
      this.laudoService.findId(this.paramValue).subscribe(data => {
        this.laudo = data;
      })
    

  
    }
  
  
  
    ngOnInit(): void {
  
  
    }

  
  
  }
  