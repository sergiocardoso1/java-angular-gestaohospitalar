import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { funcionarioConsultaDTO } from 'src/app/models/funcionarioConsultaDTO';
import { funcionarioDTO } from 'src/app/models/funcionarioDTO copy';
import { funcionario } from 'src/app/models/funcionarioModel';
import { horarioConsulta } from 'src/app/models/horarioConsultaModel';
import { ConsultaService } from 'src/app/services/consultaService/consulta.service';
import { FuncionarioService } from 'src/app/services/funcionarioService/funcionario.service';

@Component({
  selector: 'app-card-marcar-consulta',
  templateUrl: './card-marcar-consulta.component.html',
  styleUrls: ['./card-marcar-consulta.component.css']
})
export class CardMarcarConsultaComponent implements OnInit{

  funcionarios: funcionarioConsultaDTO[] = [];
  funcionarioRetorno : any;
  paramValueId:number | any;
  paramValueData:string | any;
  funcionarioDTO: Map<string[], funcionario> = new Map();
  horario: string[] = ['08:00', '09:00','10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  horarioResposta: string[] = []

  

  constructor(private funcionarioService:FuncionarioService, private route: ActivatedRoute, private router: Router, private consultaService:ConsultaService){
    this.paramValueId = this.route.snapshot.paramMap.get('especialidadeselecionada');
    this.paramValueData = this.route.snapshot.paramMap.get('data');
    this.funcionarioService.findByEspecialidade(this.paramValueId).subscribe(data => {
      this.funcionarios = data;
      this.funcionarios.forEach((funcionarioConsultaDTO) => {
      this.consultaService.findHoursByDate(this.paramValueData, funcionarioConsultaDTO.id).subscribe((data: string[]) => {
        this.horarioResposta = data;
        funcionarioConsultaDTO.horario = this.removeRepetidos(this.horario, data);
        this.sleep(2000)
      });
    });
      
    })
  
    
    

  }



  ngOnInit(): void {
   
   
  }

  removeRepetidos(vetor1: string[], vetor2: string[]): string[] {
    return vetor1.filter((item) => !vetor2.includes(item));
  }

  selecionarHorario(horarioSelecionado:string, medicoId:number){
    this.router.navigate(['/consulta/medico/',medicoId,'data',this.paramValueData,'horario',horarioSelecionado]);
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
