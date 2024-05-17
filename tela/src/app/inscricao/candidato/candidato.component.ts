import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CandidatoService } from './candidato.service';
import { objPessoa, objPessoaId } from '../objsinscricao';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule],
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent {
  @Output() ativarPerguntas = new EventEmitter<objPessoa>();
  nome: string = "";
  cpf: string = "";
  getObjpessoa: objPessoa = { nome: "", cpf: "" };
  mensagem: string = "";
  dataResponse!: objPessoa;
  ativarButton: boolean = false;
  ativarcadastro: boolean = false;

  constructor(private candidatoService: CandidatoService) { }

  async handleCpf(cpf: string): Promise<void> {
    this.ativarButton = false
    try {
      this.dataResponse = await this.candidatoService.getCPF(cpf);
  
      if (this.dataResponse.nome !== "" && this.dataResponse.nome !== null) {
        console.log("handleCpf()", this.dataResponse);
        this.nome = this.dataResponse.nome;
        this.cpf = this.dataResponse.cpf;
        this.getObjpessoa = { nome: this.dataResponse.nome, cpf: this.dataResponse.cpf };
        this.ativarcadastro = false;
        this.ativarButton = true
      } else {
        this.ativarcadastro = true;
      }
    } catch (error) {
      console.error('Erro ao buscar o CPF:', error);
      this.ativarcadastro = true;
    }
  }

  handleCadastro(): void {
    this.getObjpessoa = { nome: this.nome, cpf: this.cpf };
    this.candidatoService.postCandidato(this.getObjpessoa)
    this.nome = "";
    this.cpf = "";
    this.ativarButton = true
    this.ativarcadastro = false
  }

  handleClick(): void {
    this.getObjpessoa = { nome: this.nome, cpf: this.cpf };
    if (this.nome !== "" && this.cpf !== "") {
      console.log("Componente Filho Candidato", this.getObjpessoa);
      this.ativarPerguntas.emit(this.getObjpessoa);
    }
  }
}