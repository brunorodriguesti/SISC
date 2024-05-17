import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objCurso, objCursoId } from './objPergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  private apiUrlGetCursos = environment.API_CURSOS_TODOS;

  constructor() { }

  async getTodosCursos(): Promise<objCursoId[]> {
    try {
      const apiClient = api()
      const response = await apiClient.get<objCursoId[]>(this.apiUrlGetCursos);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }

}
