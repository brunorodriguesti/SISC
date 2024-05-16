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
  mensagem: string = "";
  dataResponse: objPessoaId[] = [];
  ativarButton: boolean = false;
  ativarcadastro: boolean = false;

  constructor(private candidatoService: CandidatoService) { }

  handleCpf(cpf: string): void {
    this.candidatoService.getCPF(cpf).subscribe(
      (response) => {
        if (response) {
          console.log("handleCpf()", response);
          this.nome = response.nome;
          this.cpf = response.cpf;
          this.ativarButton = true;
        }
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
        console.log("handleCpf()", error);
        this.ativarButton = true;
      }
    );
  }

  handleCadastro(): void {
    const objpessoa: objPessoa = { nome: this.nome, cpf: this.cpf };
    this.candidatoService.postCandidato(objpessoa).subscribe(
      (response) => {
        console.log("handleCadastro()", response);
        this.mensagem = 'Cadastro realizado com sucesso';
        this.ativarButton = true;
      },
      (error) => {
        console.log("handleCadastro()", error);
        this.mensagem = 'Erro ao cadastrar candidato';
        this.ativarButton = false;
      }
    );
  }

  handleClick(): void {
    const objpessoa: objPessoa = { nome: this.nome, cpf: this.cpf };
    if (this.nome !== "" && this.cpf !== "") {
      console.log("Componente Filho Candidato", objpessoa);
      this.ativarPerguntas.emit(objpessoa);
    }
  }
}