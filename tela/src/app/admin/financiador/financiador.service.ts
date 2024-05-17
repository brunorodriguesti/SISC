import { Injectable } from '@angular/core';
import { api } from '../../api'
import { environment } from '../../../environments/environment';
import { objFinanciador, objFinanciadorId } from './objFinanciador';

@Injectable({
  providedIn: 'root'
})

export class FinanciadorService {
  private apiUrlPost = environment.API_FINACIADOR;
  private apiUrlGetFinanciador = environment.API_FINACIADOR_TODOS;

  async postFinanciador(nome: objFinanciador): Promise<void> {
    try{
      const apiClient = api()
      await apiClient.post<objFinanciador>(this.apiUrlPost, nome)
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
    }
  }

  async getTodosFinanciadores(): Promise<objFinanciadorId[]> {
    try {
      const apiClient = api()
      const response = await apiClient.get<objFinanciadorId[]>(this.apiUrlGetFinanciador);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }
}
