import { Injectable } from '@angular/core';
import { api } from '../../api'
import { environment } from '../../../environments/environment';
import { objPessoa, objPessoaId } from '../../inscricao/objsinscricao'

@Injectable({
  providedIn: 'root'
})

export class CandidatosService {
  private apiUrlGetCandidatos = environment.API_CANDIDATO_TODOS;

  async getTodosCandidatos(): Promise<objPessoaId[]> {
    try {
      const apiClient = api()
      const response = await apiClient.get<objPessoaId[]>(this.apiUrlGetCandidatos);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }
}
