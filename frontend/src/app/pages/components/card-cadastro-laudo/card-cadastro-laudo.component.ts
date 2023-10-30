import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { especialidadeDTO } from 'src/app/models/especialidadeDTOModel';
import { LaudoNewDTO } from 'src/app/models/laudoNewDTO';
import { LaudoService } from 'src/app/services/laudoService/laudo.service';

@Component({
  selector: 'app-card-cadastro-laudo',
  templateUrl: './card-cadastro-laudo.component.html',
  styleUrls: ['./card-cadastro-laudo.component.css']
})
export class CardCadastroLaudoComponent {
  descricao:string = "";
  paramValue:number | any;


  constructor(private service:LaudoService, private router: Router, private route: ActivatedRoute){
    this.paramValue = this.route.snapshot.paramMap.get('id');
  }

  cadastro(){

    if (
      this.descricao.length < 3
    ) {
      alert('Preencha os campos nome e valor antes de cadastrar um prontuário.');
      return;
    } else{

      var objDto:LaudoNewDTO = {
        descricao:this.descricao,
        consultaId:this.paramValue

      }
      console.log(this.service.create(objDto).subscribe(
        response => {
          this.router.navigate(['/consultas/',this.paramValue]);
        }
      ));
    }
  }

}