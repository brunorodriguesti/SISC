import { Injectable } from '@angular/core';
import { api } from '../../api';
import { objEndereco, objPessoaId } from '../../DTO';
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

  formatarDataRecebido(data: string | null): string | null {
    // Verifica se a data está no formato yyyy-MM-dd
    if (!data) {
      return data;
    }
    const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    const partes = data.match(regex);
    if (partes) {
      const dia = partes[3];
      const mes = partes[2];
      const ano = partes[1];
      return `${dia}-${mes}-${ano}`;
    }
    // Se não puder formatar, retorna a data atual do dia do cadastro
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
    return `${anoAtual}-${mesAtual}-${diaAtual}`;
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