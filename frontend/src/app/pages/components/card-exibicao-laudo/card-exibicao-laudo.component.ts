import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laudo } from 'src/app/models/laudoModel';
import { LaudoService } from 'src/app/services/laudoService/laudo.service';
import { PdfService } from 'src/app/services/pdfService/pdf.service';

@Component({
  selector: 'app-card-exibicao-laudo',
  templateUrl: './card-exibicao-laudo.component.html',
  styleUrls: ['./card-exibicao-laudo.component.css']
})
export class CardExibicaoLaudoComponent implements OnInit{


    paramValue:number | any;
    laudo!: Laudo;
  
  
  
    constructor(private laudoService:LaudoService, private pdfService:PdfService, private route: ActivatedRoute, private router: Router){
      this.paramValue = this.route.snapshot.paramMap.get('id');
      this.laudoService.findId(this.paramValue).subscribe(data => {
        this.laudo = data;
      })
    

  
    }
  
  
  
    ngOnInit(): void {
  
  
    }


    gerarPDF(){
      this.pdfService.findPDFByLaudo(this.paramValue).subscribe((pdfBlob: Blob) => {
        const fileURL = URL.createObjectURL(pdfBlob);
  
        // Abre o PDF em uma nova aba ou janela
        window.open(fileURL, '_blank');
  
        // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
        setTimeout(() => URL.revokeObjectURL(fileURL), 100);
      });
  }
  
  
  }
  