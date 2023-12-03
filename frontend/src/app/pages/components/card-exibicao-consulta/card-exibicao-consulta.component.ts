import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consulta } from 'src/app/models/consultaModel';
import { Laudo } from 'src/app/models/laudoModel';
import { ProntuarioNewDTO } from 'src/app/models/prontuarioNewDTO';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';
import { LaudoService } from 'src/app/services/laudoService/laudo.service';
import { ProntuarioService } from 'src/app/services/prontuarioService/prontuario.service';

@Component({
  selector: 'app-card-exibicao-consulta',
  templateUrl: './card-exibicao-consulta.component.html',
  styleUrls: ['./card-exibicao-consulta.component.css']
})
export class CardExibicaoConsultaComponent implements OnInit{
  [x: string]: any;
  
    consulta!: consulta;
    paramValue:number | any;
    laudo: Laudo;
 
  
  
    constructor(private consultaService:ConsultaService, private prontuarioService:ProntuarioService, private laudoService:LaudoService ,private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
    
      this.consultaService.findId(this.paramValue).subscribe(data => {
        this.consulta = data;
      })

      this.laudo = {
        id:0,
        descricao:"",
        consulta:this.consulta
      }

    }

    criarProntuario(){
      var objDto:ProntuarioNewDTO = {
        pacienteId : this.consulta.paciente.id,

      }
      this.prontuarioService.create(objDto).subscribe(data => {
        alert("Prontuário criado! Clique novamente para abri-lo")
        window.location.reload();
      })
    }

    criarLaudo(){
      this.laudoService.findByConsulta(this.paramValue).subscribe(data =>{
        if(data == null){
          console.log("n vazio")
          this.router.navigate(['/consultas',this.paramValue,'cadastrolaudo']);
        }else{
          console.log("vazio")
          this.laudo = data;
          this.router.navigate(['/laudos',this.laudo.id]);
        }
        
      })
    }
  
  
  
    ngOnInit(): void {
  
  
    }
  
  
  
  }
  