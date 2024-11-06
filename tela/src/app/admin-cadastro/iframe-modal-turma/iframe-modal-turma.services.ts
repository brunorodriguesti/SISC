import { Injectable } from '@angular/core';
import { api } from '../../api';
import { environment } from '../../../environments/environment';
import { objTurmaPost } from '../../DTO';

@Injectable({
  providedIn: 'root'
})
export class CadastroCursoService {

  private apiClient = api()
  private apiUrlPostTurma = environment.API_TURMA;


  constructor() { }

  // Função de conversão de data
  formatarDataParaEnvio(data: string): string {
    // Verifica se a data está no formato ddMMyyyy
    const regex = /^(\d{2})(\d{2})(\d{4})$/;
    const partes = data.match(regex);
    if (partes) {
      const dia = partes[1];
      const mes = partes[2];
      const ano = partes[3];
      return `${ano}-${mes}-${dia}`;
    }
    // Se não puder formatar, retorna a data atual do dia do cadastro
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
    return `${anoAtual}-${mesAtual}-${diaAtual}`;
  }

  formatToTime(input: string): string {
    return input.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");
  }

  async postTurma(turma: objTurmaPost): Promise<void> {
    console.log(turma)
    try{
      await this.apiClient.post<objTurmaPost>(this.apiUrlPostTurma, turma)
    }catch(error){
      console.error('Erro ao fazer a requisição:', error)
    }
  }

}