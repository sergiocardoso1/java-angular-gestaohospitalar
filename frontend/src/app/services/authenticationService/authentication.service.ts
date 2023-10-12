import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseURL:string = 'http://localhost:8080/login';

  constructor(private httpClient:HttpClient) {

  }

  login(nome: string, senha: string) {
    return this.httpClient.post<any>(this.baseURL, { nome, senha });
  }

}
