import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { objFinanciador, objFinanciadorId } from './objFinanciador';

@Injectable({
  providedIn: 'root'
})

export class FinanciadorService {
  private apiUrlPost = `${environment.API_URL}${environment.API_FINACIADOR}`;
  private apiUrlGetFinanciador = `${environment.API_URL}${environment.API_FINACIADOR_TODOS}`;

  constructor(private http: HttpClient) { }

  postFinanciador(nome: string): Observable<objFinanciador> {
    return this.http.post<objFinanciador>(this.apiUrlPost, { nome });
  }

  getTodosFinanciadores(): Observable<objFinanciadorId[]> {
    return this.http.get<objFinanciadorId[]>(this.apiUrlGetFinanciador);
  }
}
