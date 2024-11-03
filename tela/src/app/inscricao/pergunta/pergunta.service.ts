import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objParametrosId } from '../DTO';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  private apiClient = api()
  private apiUrlGetAllParametro = environment.API_PARAMETRO_TODOS;

  constructor() { }

  async getTodosCursos(): Promise<objParametrosId[]> {
    try {
      const response = await this.apiClient.get<objParametrosId[]>(this.apiUrlGetAllParametro);
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return []
    }
  }

}
