import { Injectable } from '@angular/core';
import { api } from '../api';
import { objPessoa, objPessoaId } from './DTO';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private apiUrlPost = environment.API_ALUNO;
  private apiUrlGetCpf = environment.API_ALUNO_CPF;
  private apiUrlPostAlunoTurma = environment.API_ALUNO_TURMA;

  async getCPF(cpf: string): Promise<number> {
    try {
      const apiClient = api()
      const response = await apiClient.get<objPessoaId>(this.apiUrlGetCpf, {
        params:{
          cpf
        }
      });
      const dados = response.data;
      return dados.id
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
      return 0
      }
    }

  async postCandidato(candidato: objPessoa): Promise<void> {
    try{
      const apiClient = api()
      await apiClient.post<objPessoa>(this.apiUrlPost, candidato)
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
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