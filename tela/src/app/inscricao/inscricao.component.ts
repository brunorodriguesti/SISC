import { Component } from '@angular/core';
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
    MatFormFieldModule,
    CandidatoComponent,
    PerguntaComponent,
    CursoComponent,
    TurmaComponent
  ],
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})

export class InscricaoComponent {
  constructor(
    private inscricaoService: InscricaoService
  ){}
  cursoSelecionado!: number | null;
  candidatoObjeto!: objPessoaPost;
  id!: number | null;
  turmaSelecionada!: number;

  receberDadosCandidato(dadosCandidato: { id: number, candidato: objPessoaPost}) {
    this.id = dadosCandidato.id;
    this.candidatoObjeto = dadosCandidato.candidato;
    console.log('Dados recebidos do candidato:', this.candidatoObjeto);
  }

  receberDadosCurso(event: any) {
    this.cursoSelecionado = event.id;
    console.log('Dados recebidos do curso:', this.cursoSelecionado);
  }

  receberDadosTurma(dadosTurma: { id: number }) {
    console.log('Dados recebidos:', dadosTurma);
    this.turmaSelecionada = dadosTurma.id;
  }

  handlePostCandidato(): void {
    console.log(this.candidatoObjeto)
    this.inscricaoService.postCandidato(this.candidatoObjeto)
  }

  async handleGetCandidato(): Promise<void> {
    this.id = await this.inscricaoService.getCPF(this.candidatoObjeto.cpf)
    console.log(this.id)
  }

  handlePostAlunoTurma(): void {
    if (!this.turmaSelecionada || !this.id) return;
    console.log('Dados para o cadastro da turma:', this.id, this.turmaSelecionada)
    this.inscricaoService.postAlunoTurma(this.id, this.turmaSelecionada)
  }

  handleCadastro(): void {
    if (!this.candidatoObjeto) {
        console.warn('Dados do candidato não foram recebidos.');
        return;
    }

    // if (!this.cursoSelecionado) {
    //     console.warn('Curso não foi selecionado.');
    //     return;
    // }

    // if (!this.turmaSelecionada) {
    //     console.warn('Turma não foi selecionada.');
    //     return;
    // }
    if (this.id == 0) {
      this.handlePostCandidato();
      this.handleGetCandidato()
        .then(() => {
          // this.handlePostAlunoTurma();
          console.log(`Id do cpf recuperado do get cpf: ${this.id}`);
        })
        .catch(error => {
          console.error('Erro ao buscar candidato:', error);
        });
    } else {
      //this.handlePostAlunoTurma();
      console.log(`Id do cpf recuperado do formulario: ${this.id}`);
    }
  }
}
