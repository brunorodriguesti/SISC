import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objTurma, objTurmaId } from '../DTO';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  private apiClient = api()
  private apiUrlGetTurma = environment.API_TURMA;
  private apiUrlGetTurmaTodos = environment.API_TURMA_TODOS;
  private apiUrlGetTurmaIdCurso = environment.API_TURMA_ID_CURSO;

  constructor() { }

  async getTurma(id: number): Promise<objTurma | null> {
    try {
      const response = await this.apiClient.get<objTurma>(this.apiUrlGetTurma, {
        params:{
          id
        }
      });
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return null
    }
  }

  async getTurmaTodos(): Promise<objTurmaId[]> {
    try {
      const response = await this.apiClient.get<objTurmaId[]>(this.apiUrlGetTurmaTodos);
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
