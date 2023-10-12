import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, senha: string) {
    const body = { email: email, senha: senha };
    return this.http.post('http://localhost:8080/login', body, { observe: 'response' });
  }

  recuperarSenha(email: string) {
    const body = { email: email};
    return this.http.post('http://localhost:8080/auth/forgot', body, { observe: 'response' });
  }

}
