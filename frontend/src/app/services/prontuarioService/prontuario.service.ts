import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prontuario } from 'src/app/models/prontuarioModel';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  private baseURL:string = 'http://localhost:8080/prontuarios';

  constructor(private httpClient:HttpClient) {

  }

  findId(id:number): Observable<Prontuario>{
    return this.httpClient.get<Prontuario>(`${this.baseURL}${"/"}${id}`);
  }

  findAll(): Observable<Prontuario[]>{
    return this.httpClient.get<Prontuario[]>(`${this.baseURL}`);
  }

  create(objDto: any){
    return this.httpClient.post<any>(this.baseURL, objDto);
  }
}
