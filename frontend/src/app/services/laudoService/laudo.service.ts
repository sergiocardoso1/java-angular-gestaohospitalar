import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laudo } from 'src/app/models/laudoModel';

@Injectable({
  providedIn: 'root'
})
export class LaudoService {
  private baseURL:string= 'http://localhost:8080/laudos'


  constructor(private httpClient: HttpClient){
  }
  
  
  findId(id:number): Observable<Laudo>{
    return this.httpClient.get<Laudo>(`${this.baseURL}${"/"}${id}`);
  }

  findByConsulta(id:number): Observable<Laudo>{
    return this.httpClient.get<Laudo>(`${this.baseURL}${"/consulta/"}${id}`);
  
  }
  
  findByPaciente(id:number): Observable<Laudo[]>{
    return this.httpClient.get<Laudo[]>(`${this.baseURL}${"/paciente/"}${id}`);
  
  }
  
  create(objDto: any){
    return this.httpClient.post<any>(this.baseURL, objDto);
  }
  

  
  
  }