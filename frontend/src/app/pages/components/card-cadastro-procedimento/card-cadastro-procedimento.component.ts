import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedimentoDTO } from 'src/app/models/procedimentoDTOModel';
import { ProcedimentoService } from 'src/app/services/procedimentoService/procedimento.service';

@Component({
  selector: 'app-card-cadastro-procedimento',
  templateUrl: './card-cadastro-procedimento.component.html',
  styleUrls: ['./card-cadastro-procedimento.component.css']
})
export class CardCadastroProcedimentoComponent {
  nome:string = "";


  constructor(private service:ProcedimentoService, private router: Router){

  }

  cadastrar(){

    if (
      !this.nome
    ) {
      alert('Preencha os campos nome e valor antes de cadastrar um procedimento.');
      return;
    } else{

      var objDto:ProcedimentoDTO = {
        nome:this.nome,
      }
      console.log(this.service.create(objDto).subscribe(
        response => {
          this.router.navigate(['/procedimentos/']);
        }
      ));
    }
  }

}