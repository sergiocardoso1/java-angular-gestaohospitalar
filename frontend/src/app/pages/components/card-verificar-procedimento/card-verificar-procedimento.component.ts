import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Procedimento } from 'src/app/models/procedimentoModel';
import { ProcedimentoService } from 'src/app/services/procedimentoService/procedimento.service';

@Component({
  selector: 'app-card-verificar-procedimento',
  templateUrl: './card-verificar-procedimento.component.html',
  styleUrls: ['./card-verificar-procedimento.component.css']
})
export class CardVerificarProcedimentoComponent {

  procedimentos:Procedimento[] = []
  procedimentoselecionado: any | number;
  data:string = "";
  
  
  constructor(private procedimentoService:ProcedimentoService, private router: Router, private route: ActivatedRoute){
    this.procedimentoService.findAll().subscribe(data => {
      this.procedimentos = data;
    });
    this.procedimentoselecionado = -1;
  
  }
  
  verificar(){
    if (this.procedimentoselecionado != -1 && this.data != "") {
      this.router.navigate(['/procedimento/',this.procedimentoselecionado,'data',this.data]);
    } else {
      this.exibirAlerta('Preencha todos campos');
    }
  }
  
  exibirAlerta(mensagem: string) {
    alert(mensagem);
  }
  }