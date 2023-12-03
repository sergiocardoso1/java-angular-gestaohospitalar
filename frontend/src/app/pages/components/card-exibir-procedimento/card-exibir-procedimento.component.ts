import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcedimentoMarcar } from 'src/app/models/procedimentoMarcarModel';
import { Procedimento } from 'src/app/models/procedimentoModel';
import { ProntuarioNewDTO } from 'src/app/models/prontuarioNewDTO';
import { PdfService } from 'src/app/services/pdfService/pdf.service';
import { ServicoProcedimentoService } from 'src/app/services/servicoProcedimentoService/servico-procedimento.service';

@Component({
  selector: 'app-card-exibir-procedimento',
  templateUrl: './card-exibir-procedimento.component.html',
  styleUrls: ['./card-exibir-procedimento.component.css']
})
export class CardExibirProcedimentoComponent  implements OnInit{
  [x: string]: any;
  
    procedimento!: ProcedimentoMarcar;
    paramValue:number | any;
  
 
  
  
    constructor(private procedimentoService:ServicoProcedimentoService, private pdfService:PdfService, private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
    
      this.procedimentoService.findId(this.paramValue).subscribe(data => {
        this.procedimento = data;
      })

   

    }
  
  
    ngOnInit(): void {
  
  
    }

    gerarPDF(){
      this.pdfService.findPDFByProcedimento(this.paramValue).subscribe((pdfBlob: Blob) => {
        const fileURL = URL.createObjectURL(pdfBlob);
  
        // Abre o PDF em uma nova aba ou janela
        window.open(fileURL, '_blank');
  
        // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
        setTimeout(() => URL.revokeObjectURL(fileURL), 100);
      });
  }
  
  
  
  }