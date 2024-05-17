import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objCurso, objCursoId } from '../../inscricao/pergunta/objPergunta'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrlGetCursos = environment.API_CURSOS_TODOS;
  private apiUrlPost = environment.API_CURSOS

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

  async postCurso(objeto: objCurso): Promise<void> {
    try{
      const apiClient = api()
      await apiClient.post<objCurso>(this.apiUrlPost, objeto)
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
    }
  }
}
