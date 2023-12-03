import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private baseURL:string = 'http://localhost:8080/pdf';

  constructor(private httpClient:HttpClient) {

  }

  findPDFEspecialidades(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/especialidades"}`,{ responseType: 'blob', headers: headers });
  }

  findPDFTiposProcedimentos(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/tiposprocedimentos"}`,{ responseType: 'blob', headers: headers });
  }

  findPDFConsultas(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/consultas"}`,{ responseType: 'blob', headers: headers });
  }

  findPDFProcedimentos(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/procedimentos"}`,{ responseType: 'blob', headers: headers });
  }

  findPDFPacientes(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/pacientes"}`,{ responseType: 'blob', headers: headers });
  }

  findPDFFuncionarios(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/funcionarios"}`,{ responseType: 'blob', headers: headers });
  }

  findPDFConsultasByData(data:string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/consultas/"}${data}`,{ responseType: 'blob', headers: headers });
  }

  findPDFPacienteByData(mes:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/paciente/mes/"}${mes}`,{ responseType: 'blob', headers: headers });
  }

  findPDFByPaciente(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/paciente/"}${id}`,{ responseType: 'blob', headers: headers });
  }

  findPDFByLaudo(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/laudo/"}${id}`,{ responseType: 'blob', headers: headers });
  }

  findPDFByCaixa(mes:number, ano:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/caixa/mes/"}${mes}${"/ano/"}${ano}`,{ responseType: 'blob', headers: headers });
  }

  findPDFByProcedimento(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/procedimento/"}${id}`,{ responseType: 'blob', headers: headers });
  }

  
}

