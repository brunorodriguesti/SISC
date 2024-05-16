import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { objPessoa } from '../objsinscricao';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private apiUrlPost = `${environment.API_URL}${environment.API_CANDIDATO}`;
  private apiUrlGetCpf = `${environment.API_URL}${environment.API_CANDIDATO_CPF}`;

  constructor(private http: HttpClient) { }

  getCPF(cpf: string): Observable<objPessoa> {
    const params = new HttpParams().set('cpf', cpf);

    return this.http.get<objPessoa>(this.apiUrlGetCpf, { params });
  }

  postCandidato(candidato: objPessoa): Observable<objPessoa> {
    return this.http.post<objPessoa>(this.apiUrlPost, candidato);
  }
}