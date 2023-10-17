import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { especialidade } from 'src/app/models/especialidadeModel';
import { Procedimento } from 'src/app/models/procedimentoModel';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  private baseURL:string = 'http://localhost:8080/procedimentos';

  constructor(private httpClient:HttpClient) {

  }

  findId(id:number): Observable<Procedimento>{
    return this.httpClient.get<especialidade>(`${this.baseURL}${"/"}${id}`);
  }

  findQuantidade(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}${"/quantidade/"}`);
  
  }

  findAll(): Observable<especialidade[]>{
    return this.httpClient.get<especialidade[]>(`${this.baseURL}`);
  }

  create(objDto: any){
    return this.httpClient.post<any>(this.baseURL, objDto);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.baseURL}${"/"}${id}`)
  }
}
