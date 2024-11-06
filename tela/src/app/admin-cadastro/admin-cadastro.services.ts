import { Injectable } from '@angular/core';
import { api } from '../api';
import { environment } from '../../environments/environment';
import { objCursoId, objTurmaId } from '../DTO';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiClient = api()
  private apiUrlGetCursos = environment.API_CURSOS_TODOS;
  private apiUrlGetTurmaIdCurso = environment.API_TURMA_ID_CURSO;

  constructor() { }

  async getTodosCursos(): Promise<objCursoId[]> {
    try {
      const response = await this.apiClient.get<objCursoId[]>(this.apiUrlGetCursos);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }

  async getTurmaIdCurso(id: number): Promise<objTurmaId[]> {
    try {
      const response = await this.apiClient.get<objTurmaId[]>(`${this.apiUrlGetTurmaIdCurso}?idCurso=${id}`);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }

}