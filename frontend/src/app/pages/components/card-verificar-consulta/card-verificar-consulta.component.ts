import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { especialidade } from 'src/app/models/especialidadeModel';
import { EspecialidadeService } from 'src/app/services/especialidadeService/especialidade.service';

@Component({
  selector: 'app-card-verificar-consulta',
  templateUrl: './card-verificar-consulta.component.html',
  styleUrls: ['./card-verificar-consulta.component.css']
})
export class CardVerificarConsultaComponent {

especialidades:especialidade[] = []
especialidadeselecionada: any | number;
data:string = "";


constructor(private especialidadeService:EspecialidadeService, private router: Router, private route: ActivatedRoute){
  this.especialidadeService.findAll().subscribe(data => {
    this.especialidades = data;
  });
  this.especialidadeselecionada = -1;

}

verificar(){
  if (this.especialidadeselecionada != -1 && this.data != "") {
    this.router.navigate(['/consulta/especialidade/',this.especialidadeselecionada,'data',this.data]);
  } else {
    this.exibirAlerta('Preencha todos campos');
  }
}

exibirAlerta(mensagem: string) {
  alert(mensagem);
}
}