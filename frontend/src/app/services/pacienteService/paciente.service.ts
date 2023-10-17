import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/pacienteModel';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL:string= 'http://localhost:8080/pacientes'


  constructor(private httpClient: HttpClient){
  }

  findAll(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.baseURL);

  }

  findQuantidade(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}${"/quantidade/"}`);
  
  }

  findId(id:number): Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}${"/"}${id}`);
  }

  findName(name:string): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}${"/nome/"}${name}`);

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
