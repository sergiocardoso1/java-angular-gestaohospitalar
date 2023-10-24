import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { consulta } from 'src/app/models/consultaModel';
import { funcionario } from 'src/app/models/funcionarioModel';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService  {

  private baseURL:string= 'http://localhost:8080/consultas'
  
  
  constructor(private httpClient: HttpClient){
  }
  
  findAll(): Observable<consulta[]>{
    return this.httpClient.get<consulta[]>(this.baseURL);
  
  }

  findQuantidadeHoje(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}${"/hoje/"}`);
  
  }

  findByDate(data:string): Observable<consulta[]>{
    return this.httpClient.get<consulta[]>(`${this.baseURL}${"/data/"}${data}`);
  
  }
  
  findHoursByDate(data:string, id:number): Observable<string[]>{
    console.log(this.baseURL,"/data/",data,"/medico/",id);
    return this.httpClient.get<string[]>(`${this.baseURL}${"/data/"}${data}${"/medico/"}${id}`);
  
  }

  findByPaciente(id:number): Observable<consulta[]>{
    return this.httpClient.get<consulta[]>(`${this.baseURL}${"/paciente/"}${id}`);
  
  }
  
  
  findId(id:number): Observable<consulta>{
    return this.httpClient.get<consulta>(`${this.baseURL}${"/"}${id}`);
  }
  
  
  
  update(objDto: any, id:number): Observable<void>{
    return this.httpClient.put<void>(`${this.baseURL}${"/"}${id}`, objDto);
  }
  
  create(objDto: any){
    return this.httpClient.post<any>(this.baseURL, objDto);
  }
  
  delete(id:number){
    return this.httpClient.delete(`${this.baseURL}${"/"}${id}`)
  }
  
  
  
  
  }