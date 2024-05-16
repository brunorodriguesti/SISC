import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CandidatoService } from './candidato.service';
import { objPessoa } from '../objsinscricao';
import { firstValueFrom } from 'rxjs';

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

  constructor(private candidatoService: CandidatoService) { }

  async handleClick(): Promise<void> {
    const objpessoa: objPessoa = { nome: this.nome, cpf: this.cpf };
    if (this.nome !== "" && this.cpf !== "") {
      try {
        const response = await firstValueFrom(this.candidatoService.postCandidato(objpessoa));
        this.mensagem = response.message;
        this.ativarPerguntas.emit(objpessoa);
      } catch (error) {
        this.mensagem = 'Erro ao cadastrar candidato';
      }
    }
  }
}
