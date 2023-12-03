import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcedimentoMarcar } from 'src/app/models/procedimentoMarcarModel';

@Injectable({
  providedIn: 'root'
})
export class ServicoProcedimentoService {

  private baseURL:string = 'http://localhost:8080/servicodeprocedimento';

  constructor(private httpClient:HttpClient) {

  }

  findId(id:number): Observable<ProcedimentoMarcar>{
    return this.httpClient.get<ProcedimentoMarcar>(`${this.baseURL}${"/"}${id}`);
  }

  findQuantidadeHoje(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}${"/hoje/"}`);
  
  }

  findAll(): Observable<ProcedimentoMarcar[]>{
    return this.httpClient.get<ProcedimentoMarcar[]>(`${this.baseURL}`);
  }

  findByDate(data:string): Observable<ProcedimentoMarcar[]>{
    return this.httpClient.get<ProcedimentoMarcar[]>(`${this.baseURL}${"/data/"}${data}`);
  
  }
  
  findDateAndProce(data:string, id:number): Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseURL}${"/data/"}${data}${"/procedimento/"}${id}`);
  
  }

  create(objDto: any){
    return this.httpClient.post<any>(this.baseURL, objDto);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.baseURL}${"/"}${id}`)
  }


  findDoMes(): Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseURL}${"/procedimentosdomes"}`);
  
  }
}
