import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InscricaoService } from './inscricao.service';
import { CandidatoComponent } from './candidato/candidato.component'
import { CursoComponent } from './curso/curso.component'
import { TurmaComponent } from './turma/turma.component'
import { PerguntaComponent } from './pergunta/pergunta.component'
import { objPessoaPost } from './DTO';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    CandidatoComponent,
    // PerguntaComponent,
    CursoComponent,
    TurmaComponent,
  ],
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})

export class InscricaoComponent {
  constructor(
    private inscricaoService: InscricaoService
  ){}
  cursoSelecionado!: number | null;
  dadosRecebidos: boolean = false;
  candidatoObjeto!: objPessoaPost;
  id!: number | null;
  turmaSelecionada!: number;

  receberDadosCandidato(dadosCandidato: { id: number, candidato: objPessoaPost, dadosEnviados: boolean }) {
    console.log('Dados recebidos do candidato:', dadosCandidato);
    this.id = dadosCandidato.id;
    this.candidatoObjeto = dadosCandidato.candidato;
    this.dadosRecebidos = dadosCandidato.dadosEnviados;
  }

  receberDadosCurso(event: any) {
    console.log('Dados recebidos do curso:', event.id);
    this.cursoSelecionado = event.id;
  }

  receberDadosTurma(dadosTurma: { id: number }) {
    console.log('Dados recebidos:', dadosTurma);
    this.turmaSelecionada = dadosTurma.id;
  }

  handlePostCandidato(): void {
    console.log("Cadastrando candidato...", this.candidatoObjeto)
    this.inscricaoService.postCandidato(this.candidatoObjeto)
  }

  async handleGetCandidato(): Promise<void> {
    console.log("Obtendo ID do candidato...", this.candidatoObjeto.cpf)
    this.id = await this.inscricaoService.getCPF(this.candidatoObjeto.cpf)
    console.log(this.id)
  }

  handlePostAlunoTurma(): void {
    if (!this.turmaSelecionada || !this.id) { "Dados nulos para o cadastro do candidato a turma" ; return};
    console.log('Dados para o cadastro da turma:', this.id, this.turmaSelecionada)
    this.inscricaoService.postAlunoTurma(this.id, this.turmaSelecionada)
  }

  handleCadastro(): void {
    if (!this.candidatoObjeto) {
        console.warn('Dados do candidato não foram recebidos.');
        return;
    }

    if (!this.cursoSelecionado || this.cursoSelecionado == 0) {
        console.warn('Curso não foi selecionado.');
        return;
    }

    if (!this.turmaSelecionada) {
        console.warn('Turma não foi selecionada.');
        return;
    }
    if (this.id == 0) {
      console.log(`Sera cadastrado o candidato ${this.candidatoObjeto.nome}`)
      console.log(this.candidatoObjeto)
      this.handlePostCandidato();
      this.handleGetCandidato()
        .then(() => {
          this.handlePostAlunoTurma();
        })
        .catch(error => {
          console.error('Erro ao buscar candidato:', error);
        });
    } else {
      console.log(`Candidato já cadastrado: ${this.id} ${this.candidatoObjeto.nome}`)
      this.handlePostAlunoTurma();
    }
  }
}
