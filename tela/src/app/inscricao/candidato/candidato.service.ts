import { Injectable } from '@angular/core';
import { api } from '../../api';
import { objEndereco } from '../DTO';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiUrlGetEndereco = environment.API_ENDERECO;

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

  async getEndereco(cep: string): Promise<objEndereco> {
    try {
      const apiClient = api()
      const response = await apiClient.get<objEndereco>(this.apiUrlGetEndereco, {
        params:{
          cep
        }
      });
      const dados = response.data;
      return dados
    }catch(error){
      console.error('Erro ao fazer a requisição:', error);
      return {
        cep: "",
        logradouro: "",
        complemento: "",
        unidade: "",
        bairro: "",
        localidade: "",
        uf: "",
        estado: "",
        regiao: ""
      }
    }
  }

}