import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objCurso } from '../../DTO';

@Injectable({
  providedIn: 'root'
})
export class CadastroTurmaService {

  private apiClient = api()
  private apiUrlPostCurso = environment.API_CURSOS;


  constructor() { }

  async postCurso(curso: objCurso): Promise<void> {
    try{
      await this.apiClient.post<objCurso>(this.apiUrlPostCurso, curso)
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
    }
  }

}