import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { especialidadeDTO } from 'src/app/models/especialidadeDTOModel';
import { EspecialidadeService } from 'src/app/services/especialidadeService/especialidade.service';

@Component({
  selector: 'app-card-cadastro-especialidade',
  templateUrl: './card-cadastro-especialidade.component.html',
  styleUrls: ['./card-cadastro-especialidade.component.css']
})
export class CardCadastroEspecialidadeComponent {
  nome:string = "";


  constructor(private service:EspecialidadeService, private router: Router){

  }

  cadastrarEspecialidade(){

    if (
      !this.nome
    ) {
      alert('Preencha os campos nome e valor antes de cadastrar uma especialidade.');
      return;
    } else{

      var objDto:especialidadeDTO = {
        nome:this.nome,
      }
      console.log(this.service.create(objDto).subscribe(
        response => {
          this.router.navigate(['/especialidades/']);
        }
      ));
    }
  }

}