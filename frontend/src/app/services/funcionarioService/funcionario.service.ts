import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { funcionarioConsultaDTO } from 'src/app/models/funcionarioConsultaDTO';
import { funcionario } from 'src/app/models/funcionarioModel';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

private baseURL:string= 'http://localhost:8080/funcionarios'


constructor(private httpClient: HttpClient){
}

findAll(): Observable<funcionario[]>{
  return this.httpClient.get<funcionario[]>(this.baseURL);

}

findByEspecialidade(id:Number): Observable<funcionarioConsultaDTO[]>{
  return this.httpClient.get<funcionarioConsultaDTO[]>(`${this.baseURL}${"/especialidade/"}${id}`);

}

findId(id:number): Observable<funcionario>{
  return this.httpClient.get<funcionario>(`${this.baseURL}${"/"}${id}`);
}

findName(name:string): Observable<funcionario[]>{
  return this.httpClient.get<funcionario[]>(`${this.baseURL}${"/nome/"}${name}`);

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
