import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { objPessoa } from '../objsinscricao';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private apiUrl = `${environment.API_URL}${environment.API_CANDIDATO}`;

  constructor(private http: HttpClient) { }

  postCandidato(candidato: objPessoa): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, candidato, { headers });
  }
}