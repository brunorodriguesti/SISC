import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiUrl!: string;
    private apiFinanciador!: string;
    private apiFinanciadorTodos!: string;
    private apiFinanciadorId!: string;
    private apiCursos!: string;
    private apiCursosTodos!: string;
    private apiCursosId!: string;
    private apiCandidato!: string;
    private apiCandidatoTodos!: string;
    private apiCandidatoId!: string;
    private apiCandidatoCpf!: string;
  
    constructor(private http: HttpClient) {
      this.apiUrl = process.env['API_URL']!;
      this.apiFinanciador = process.env['API_FINACIADOR']!;
      this.apiFinanciadorTodos = process.env['API_FINACIADOR_TODOS']!;
      this.apiFinanciadorId = process.env['API_FINACIADOR_ID']!;
      this.apiCursos = process.env['API_CURSOS']!;
      this.apiCursosTodos = process.env['API_CURSOS_TODOS']!;
      this.apiCursosId = process.env['API_CURSOS_ID']!;
      this.apiCandidato = process.env['API_CANDIDATO']!;
      this.apiCandidatoTodos = process.env['API_CANDIDATO_TODOS']!;
      this.apiCandidatoId = process.env['API_CANDIDATO_ID']!;
      this.apiCandidatoCpf = process.env['API_CANDIDATO_CPF']!;
  
      if (!this.apiUrl) {
        throw new Error('A variável de ambiente API_URL não está definida');
      }
    }

  // Financiador Methods
  getFinanciador(nome: string): Observable<any> {
    const params = new HttpParams().set('nome', nome);
    return this.http.get(`${this.apiUrl}${this.apiFinanciador}`, { params });
  }

  postFinanciador(nome: string): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.apiFinanciador}`, { nome });
  }

  getTodosFinanciadores(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.apiFinanciadorTodos}`);
  }

  getFinanciadorById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(`${this.apiUrl}${this.apiFinanciadorId}`, { params });
  }

  // Curso Methods
  getCurso(nome: string): Observable<any> {
    const params = new HttpParams().set('nome', nome);
    return this.http.get(`${this.apiUrl}${this.apiCursos}`, { params });
  }

  postCurso(nome: string, objetivo: string, cargaHoraria: number): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.apiCursos}`, { nome, objetivo, cargaHoraria });
  }

  getTodosCursos(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.apiCursosTodos}`);
  }

  getCursoById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(`${this.apiUrl}${this.apiCursosId}`, { params });
  }

  // Candidato Methods
  postCandidato(nome: string, cpf: string): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.apiCandidato}`, { nome, cpf });
  }

  getTodosCandidatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.apiCandidatoTodos}`);
  }

  getCandidatoById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(`${this.apiUrl}${this.apiCandidatoId}`, { params });
  }

  getCandidatoByCpf(cpf: string): Observable<any> {
    const params = new HttpParams().set('cpf', cpf);
    return this.http.get(`${this.apiUrl}${this.apiCandidatoCpf}`, { params });
  }
}
