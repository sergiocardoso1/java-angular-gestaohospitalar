import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cep } from 'src/app/models/cep';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient:HttpClient) {

  }

  consultaCep(cep:string): Observable<cep>{
    return this.httpClient.get<cep>(`https://viacep.com.br/ws/${cep}/json`);


  }

  }

