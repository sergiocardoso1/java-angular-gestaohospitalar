import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { especialidade } from 'src/app/models/especialidadeModel';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  private baseURL:string = 'http://localhost:8080/especialidades';

  constructor(private httpClient:HttpClient) {

  }

  findId(id:number): Observable<especialidade>{
    return this.httpClient.get<especialidade>(`${this.baseURL}${"/"}${id}`);
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
