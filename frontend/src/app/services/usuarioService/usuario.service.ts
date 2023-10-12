import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aluno } from 'src/app/models/alunoModel';
import { User } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL:string= 'http://localhost:8080/usuarios'


  constructor(private httpClient: HttpClient){
  }

  findAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL);

  }

  findId(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}${"/"}${id}`);
  }

  findName(name:string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}${"/nome/"}${name}`);

  }

  findAcadId(id: number): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}${"/academia/"}${id}`);

  }

  findAcadIdAndName(id: number, name:string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}${"/academia/"}${id}${"/nome/"}${name}`);

  }

  update(objDto: any, id:number): Observable<void>{
    return this.httpClient.put<void>(`${this.baseURL}${"/"}${id}`, objDto);
  }

  createAluno(objDto: any){
    return this.httpClient.post<any>(this.baseURL, objDto);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.baseURL}${"/"}${id}`)
  }

}