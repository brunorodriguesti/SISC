import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objCursoId } from '../DTO';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  private apiUrlGetTurma = environment.API_TURMA;


  constructor() { }

  async getTurma(id: number): Promise<any[]> {
    try {
      const apiClient = api()
      const response = await apiClient.get<any[]>(this.apiUrlGetTurma, {
        params:{
          id
        }
      });
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }
}
