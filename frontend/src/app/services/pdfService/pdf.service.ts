import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private baseURL:string = 'http://localhost:8080/pdf';

  constructor(private httpClient:HttpClient) {

  }

  findPDF(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}${"/"}${id}`,{ responseType: 'blob', headers: headers });
  }
}

