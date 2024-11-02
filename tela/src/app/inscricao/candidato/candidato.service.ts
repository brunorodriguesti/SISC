import { Injectable } from '@angular/core';
import { api } from '../../api';
import { objEndereco, objPessoaId } from '../DTO';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiClient = api()
  private apiUrlGetEndereco = environment.API_ENDERECO;
  private apiUrlGetCpf = environment.API_ALUNO_CPF;
  constructor() { }

  // Função de conversão de data
  formatarDataParaEnvio(data: string): string {
    const partes = data.split('/');
    if (partes.length === 3) {
      const dia = partes[0];
      const mes = partes[1];
      const ano = partes[2];
      return `${ano}-${mes}-${dia}`;
    }
    return '0000-00-00'; // retorna como está se não puder formatar
  }

  // Função para remover a máscara do CPF
  limparMascara(cpf: string): string {
    return cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  }

  async getCPF(cpf: string): Promise<objPessoaId | null> {
    try {
      const response = await this.apiClient.get<objPessoaId>(this.apiUrlGetCpf, {
        params:{
          cpf
        }
      });
      const dados = response.data;
      return dados
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      return null;
    }
  }

  async getEndereco(cep: string): Promise<objEndereco | null> {
    try {
      const response = await this.apiClient.get<objEndereco>(this.apiUrlGetEndereco, {
        params:{
          cep
        }
      });
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return null;
    }
  }

}