import { Component } from '@angular/core';
import { Procedimento } from 'src/app/models/procedimentoModel';
import { ProcedimentoService } from 'src/app/services/procedimentoService/procedimento.service';

@Component({
  selector: 'app-card-procedimentos',
  templateUrl: './card-procedimentos.component.html',
  styleUrls: ['./card-procedimentos.component.css']
})
export class CardProcedimentosComponent {

  procedimentos:Procedimento[] = []

  constructor(private procedimentoService:ProcedimentoService){
    this.procedimentoService.findAll().subscribe(data => {
      this.procedimentos = data;
    });

  }
  deletePlano(id:number){
    this.procedimentoService.delete(id).subscribe(
      () => {
        alert('Especialidade excluída com sucesso!');
        window.location.reload();
      },
      error => {
        alert('Erro ao excluir especialidade!');
        // Trate o erro de exclusão do plano adequadamente
      }
    );
  }


}