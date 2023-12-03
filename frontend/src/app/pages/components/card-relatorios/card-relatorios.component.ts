import { Component } from '@angular/core';
import { PdfService } from 'src/app/services/pdfService/pdf.service';

@Component({
  selector: 'app-card-relatorios',
  templateUrl: './card-relatorios.component.html',
  styleUrls: ['./card-relatorios.component.css']
})
export class CardRelatoriosComponent {
  data:any|string;
  mes: any|number;
  ano: any|number;
  anoAtual: any|number;
  opcaoSelecionada:any|number;
  
  constructor(private pdfService:PdfService){
    this.opcaoSelecionada = -1;
    // Obter o ano atual
    this.anoAtual = new Date().getFullYear();

    // Definir o ano inicial como o ano atual
    this.ano = this.anoAtual;
  }

  gerarPDF(){

    if(this.opcaoSelecionada != -1){

      if(this.opcaoSelecionada == 1){
        this.pdfService.findPDFEspecialidades().subscribe((pdfBlob: Blob) => {
          const fileURL = URL.createObjectURL(pdfBlob);
    
          // Abre o PDF em uma nova aba ou janela
          window.open(fileURL, '_blank');
    
          // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
          setTimeout(() => URL.revokeObjectURL(fileURL), 100);
        });
      }else if(this.opcaoSelecionada == 2){
        this.pdfService.findPDFTiposProcedimentos().subscribe((pdfBlob: Blob) => {
          const fileURL = URL.createObjectURL(pdfBlob);
    
          // Abre o PDF em uma nova aba ou janela
          window.open(fileURL, '_blank');
    
          // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
          setTimeout(() => URL.revokeObjectURL(fileURL), 100);
        });
      }else if(this.opcaoSelecionada == 3){
        this.pdfService.findPDFConsultas().subscribe((pdfBlob: Blob) => {
          const fileURL = URL.createObjectURL(pdfBlob);
    
          // Abre o PDF em uma nova aba ou janela
          window.open(fileURL, '_blank');
    
          // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
          setTimeout(() => URL.revokeObjectURL(fileURL), 100);
        });
      }else if(this.opcaoSelecionada == 4){
        this.pdfService.findPDFProcedimentos().subscribe((pdfBlob: Blob) => {
          const fileURL = URL.createObjectURL(pdfBlob);
    
          // Abre o PDF em uma nova aba ou janela
          window.open(fileURL, '_blank');
    
          // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
          setTimeout(() => URL.revokeObjectURL(fileURL), 100);
        });
      }else if(this.opcaoSelecionada == 5){
        this.pdfService.findPDFPacientes().subscribe((pdfBlob: Blob) => {
          const fileURL = URL.createObjectURL(pdfBlob);
    
          // Abre o PDF em uma nova aba ou janela
          window.open(fileURL, '_blank');
    
          // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
          setTimeout(() => URL.revokeObjectURL(fileURL), 100);
        });
      }else if(this.opcaoSelecionada == 6){
        this.pdfService.findPDFFuncionarios().subscribe((pdfBlob: Blob) => {
          const fileURL = URL.createObjectURL(pdfBlob);
    
          // Abre o PDF em uma nova aba ou janela
          window.open(fileURL, '_blank');
    
          // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
          setTimeout(() => URL.revokeObjectURL(fileURL), 100);
        });
      }else if(this.opcaoSelecionada == 7){
        if(this.data != null){
          this.pdfService.findPDFConsultasByData(this.data).subscribe((pdfBlob: Blob) => {
            const fileURL = URL.createObjectURL(pdfBlob);
      
            // Abre o PDF em uma nova aba ou janela
            window.open(fileURL, '_blank');
      
            // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
            setTimeout(() => URL.revokeObjectURL(fileURL), 100);
          });
        }else{
          alert("Preencha todos os campos!")
        }
        
      }else if(this.opcaoSelecionada == 8){
        if(this.mes != null){
          this.pdfService.findPDFPacienteByData(this.mes).subscribe((pdfBlob: Blob) => {
            const fileURL = URL.createObjectURL(pdfBlob);
      
            // Abre o PDF em uma nova aba ou janela
            window.open(fileURL, '_blank');
      
            // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
            setTimeout(() => URL.revokeObjectURL(fileURL), 100);
          });
        }else{
          alert("Preencha todos os campos!")
        }
        
      }else if(this.opcaoSelecionada == 9){
        if(this.mes != null && this.ano != null){
          this.pdfService.findPDFByCaixa(this.mes, this.ano).subscribe((pdfBlob: Blob) => {
            const fileURL = URL.createObjectURL(pdfBlob);
      
            // Abre o PDF em uma nova aba ou janela
            window.open(fileURL, '_blank');
      
            // Importante: Revogar a URL temporária após algum tempo para liberar recursos do navegador
            setTimeout(() => URL.revokeObjectURL(fileURL), 100);
          });
        }
        
        
      }

  


    }

   
  } 
}
