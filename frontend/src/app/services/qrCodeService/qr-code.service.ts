import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  private baseURL:string = 'http://localhost:8080/qrcode';

  constructor(private httpClient:HttpClient) {

  }

  findQRCode(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Accept': 'image/png' });
    return this.httpClient.get(`${this.baseURL}${"/"}${id}`,{ responseType: 'blob', headers: headers });
  }

}
