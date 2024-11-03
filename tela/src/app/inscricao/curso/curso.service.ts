import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objCursoId } from '../DTO';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiClient = api()
  private apiUrlGetCursos = environment.API_CURSOS_TODOS;

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

  async getTurmaById(): Promise<objCursoId> {
    try {
      const response = await this.apiClient.get<objCursoId>(this.apiUrlGetCursos);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return {
        id: 0,
        nome: "",
        objetivo: ""
      }
    }
  }
}
