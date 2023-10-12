import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcedimentoMarcar } from 'src/app/models/procedimentoMarcarModel';
import { ProcedimentoService } from 'src/app/services/procedimentoService/procedimento.service';
import { ServicoProcedimentoService } from 'src/app/services/servicoProcedimentoService/servico-procedimento.service';

@Component({
  selector: 'app-card-marcar-procedimento',
  templateUrl: './card-marcar-procedimento.component.html',
  styleUrls: ['./card-marcar-procedimento.component.css']
})
export class CardMarcarProcedimentoComponent implements OnInit{

  paramValueId:number | any;
  paramValueData:string | any;
  servicoProcedimentoDTO: Map<string[], ProcedimentoMarcar> = new Map();
  horario: string[] = ['08:00', '09:00','10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  horarioResposta: string[] = []
  nomeProcedimento: string = "";

  

  constructor(private procedimentoMarcarService:ServicoProcedimentoService, private route: ActivatedRoute, private router: Router, private procedimentoService:ProcedimentoService){
    this.paramValueId = this.route.snapshot.paramMap.get('procedimentoselecionado');
    this.paramValueData = this.route.snapshot.paramMap.get('data');
    this.procedimentoService.findId(this.paramValueId).subscribe(data => {
      this.nomeProcedimento = data.nome;
    })
    
    this.procedimentoMarcarService.findDateAndProce(this.paramValueData, this.paramValueId).subscribe(data => {
      console.log(data)
      this.horarioResposta = this.removeRepetidos(this.horario, data);
  
      
    })

  }
  ngOnInit(): void {
    
  }

  removeRepetidos(vetor1: string[], vetor2: string[]): string[] {
    return vetor1.filter((item) => !vetor2.includes(item));
  }

  selecionarHorario(horarioSelecionado:string, procedimentoselecionado:number){
    this.router.navigate(['/procedimento/',procedimentoselecionado,'data',this.paramValueData,'horario',horarioSelecionado]);
  }

}