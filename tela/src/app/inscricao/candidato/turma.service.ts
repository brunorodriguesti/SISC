import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objTurma } from '../DTO';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  private apiUrlGetTurma = environment.API_TURMA;
  private apiUrlPostAlunoTurma = environment.API_ALUNO_TURMA;

  constructor() { }

  async getTurma(id: number): Promise<objTurma> {
    try {
      const apiClient = api()
      const response = await apiClient.get<objTurma>(this.apiUrlGetTurma, {
        params:{
          id
        }
      });
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return {
        dataInicio: "",
        dataFim: "",
        hora: "",
        numeroMaximoAlunos: 0,
        cadastroAlunoDTOList: [],
        cursoDTO: {
          id: 0,
          nome: "",
          objetivo: ""
        }
      }
    }
  }

  async postAlunoTurma(idAluno: number, idTurma: number): Promise<void> {
    try{
      const apiClient = api()
      await apiClient.post<any>(this.apiUrlPostAlunoTurma, {idAluno, idTurma})
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
    }
  }
}
