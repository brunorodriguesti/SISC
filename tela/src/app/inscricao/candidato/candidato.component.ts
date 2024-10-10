import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CandidatoService } from './candidato.service';
import { CursoService } from './curso.service';
import { TurmaService } from './turma.service';
import { objPessoa, objCursoId, objTurma } from '../DTO';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})

export class CandidatoComponent {
  @Output() paramsCandidato = new EventEmitter<any>();
  dataCurso: objCursoId[] = [];
  dataTurma: objTurma[] = [];
  getTurma: objTurma = {
    dataInicio: "",
    dataFim: "",
    hora: "",
    numeroMaximoAlunos: 0,
    cadastroAlunoDTOList: [],
    cursoDTO: {
      id: 0,
      nome: "",
      objetivo: ""
    }
  };
  cursoSelecionado: number = 0;
  turmaSelecionada: objTurma | null = null;
  nome: string = "";
  cpf: string = "";
  getObjpessoa: objPessoa = { nome: "", cpf: "" };

  constructor(
    private candidatoService: CandidatoService,
    private cursoService: CursoService,
    private turmaService: TurmaService
  ){}

  ngOnInit(): void {
    this.handleGetCursos();
  }

  async handleGetCursos(): Promise<void> {
    try {
      this.dataCurso = await this.cursoService.getTodosCursos();
    } catch (error) {
      console.error('Erro ao buscar os cursos:', error);
    }
  }

  async handleGetTurma( id: number): Promise<void> {
    try {
      if (id == 1) {
        for (let i = 1; i <= 2; i++) {
          this.getTurma = await this.turmaService.getTurma(i);
          this.dataTurma.push(this.getTurma);
        }
      } else if (id == 2) {
        for (let i = 3; i <= 4; i++) {
          this.getTurma = await this.turmaService.getTurma(i);
          this.dataTurma.push(this.getTurma);
        }
      } else if (id == 3) {
        for (let i = 5; i <= 6; i++) {
          this.getTurma = await this.turmaService.getTurma(i);
          this.dataTurma.push(this.getTurma);
        }
      }else {
        this.dataTurma.push(this.getTurma);
      }
    } catch (error) {
      console.error('Erro ao buscar a turma:', error);
    }
  }

  onCursoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.cursoSelecionado = +target.value;
    this.handleGetTurma(this.cursoSelecionado);
  }

  onTurmaChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.turmaSelecionada = this.dataTurma.find(turma => turma.dataInicio === target.value) || null;
  }
  
  handleCadastro(): void {
    this.getObjpessoa = { nome: this.nome, cpf: this.cpf };
    this.candidatoService.postCandidato(this.getObjpessoa)
    this.nome = "";
    this.cpf = "";
  }

  handleClick(): void {
    this.getObjpessoa = { nome: this.nome, cpf: this.cpf };
    if (this.nome !== "" && this.cpf !== "") {
      console.log("Componente Filho Candidato", this.getObjpessoa);
      this.paramsCandidato.emit(this.getObjpessoa);
    }
  }
}