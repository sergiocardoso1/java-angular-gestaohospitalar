import { Component } from '@angular/core';
import { especialidade } from 'src/app/models/especialidadeModel';
import { EspecialidadeService } from 'src/app/services/especialidadeService/especialidade.service';

@Component({
  selector: 'app-card-especialidades',
  templateUrl: './card-especialidades.component.html',
  styleUrls: ['./card-especialidades.component.css']
})
export class CardEspecialidadesComponent {

  especialidades:especialidade[] = []

  constructor(private especialidadeService:EspecialidadeService){
    this.especialidadeService.findAll().subscribe(data => {
      this.especialidades = data;
    });

  }
  deletePlano(id:number){
    this.especialidadeService.delete(id).subscribe(
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