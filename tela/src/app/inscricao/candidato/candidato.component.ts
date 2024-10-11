import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CandidatoService } from './candidato.service';
import { CursoService } from './curso.service';
import { TurmaService } from './turma.service';
import { objPessoa, objCursoId, objTurma, objTurmaId } from '../DTO';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})

export class CandidatoComponent {
  dataCurso: objCursoId[] = [];
  dataTurma: objTurmaId[] = [];
  turmaSelecionada: objTurmaId | null = null;
  getObjpessoa: objPessoa | null = null;
  getTurma: objTurma | null = null
  cursoSelecionado: number = 0;
  id: number = 0;
  nome: string = "";
  cpf: string = "";
  cep: string = "";
  nomeMae: string = "";
  email: string = "";
  telefone: string = "";
  celular: string = "";
  dataNascimento: string = "0000-00-00";
  carteiraIdentidade: string = "";
  orgaoEmissor: string = "";
  pisPasep: string = "";
  numeroCTPS: string = "";
  serieCTPS: string = "";
  sexo: string = '';

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
          this.dataTurma.push({
            id: i,
            dataInicio: this.getTurma.dataInicio,
            dataFim: this.getTurma.dataFim,
            hora: this.getTurma.hora,
            numeroMaximoAlunos: this.getTurma.numeroMaximoAlunos,
            cadastroAlunoDTOList: this.getTurma.cadastroAlunoDTOList,
            cursoDTO: this.getTurma.cursoDTO
          });
        }
      } else if (id == 2) {
        for (let i = 3; i <= 4; i++) {
          this.getTurma = await this.turmaService.getTurma(i);
          this.dataTurma.push({
            id: i,
            dataInicio: this.getTurma.dataInicio,
            dataFim: this.getTurma.dataFim,
            hora: this.getTurma.hora,
            numeroMaximoAlunos: this.getTurma.numeroMaximoAlunos,
            cadastroAlunoDTOList: this.getTurma.cadastroAlunoDTOList,
            cursoDTO: this.getTurma.cursoDTO
          });
        }
      } else if (id == 3) {
        for (let i = 5; i <= 6; i++) {
          this.getTurma = await this.turmaService.getTurma(i);
          this.dataTurma.push({
            id: i,
            dataInicio: this.getTurma.dataInicio,
            dataFim: this.getTurma.dataFim,
            hora: this.getTurma.hora,
            numeroMaximoAlunos: this.getTurma.numeroMaximoAlunos,
            cadastroAlunoDTOList: this.getTurma.cadastroAlunoDTOList,
            cursoDTO: this.getTurma.cursoDTO
          });
        }
      }else {
        this.dataTurma.push({
          id: 0,
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
        });
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

  handlePostCandidato(): void {
    this.getObjpessoa = {
      nome: this.nome,
      cpf: this.cpf,
      cep: this.cep,
      nomeMae: this.nomeMae,
      email: this.email,
      telefone: this.telefone,
      celular: this.celular,
      dataNascimento: this.dataNascimento,
      carteiraIdentidade: this.carteiraIdentidade,
      orgaoEmissor: this.orgaoEmissor,
      pisPasep: this.pisPasep,
      numeroCTPS: this.numeroCTPS,
      serieCTPS: this.serieCTPS
    };
    this.candidatoService.postCandidato(this.getObjpessoa)
  }

  async handleGetCandidato(): Promise<void> {
    this.id = await this.candidatoService.getCPF(this.cpf)
  }

  handlePostAlunoTurma(): void {
    if (this.turmaSelecionada == null) {
      return;
    }
    this.turmaService.postAlunoTurma(this.id, this.turmaSelecionada.id)
  }


  handleCadastro(): void {
    this.handlePostCandidato();
    this.handleGetCandidato();
    this.handlePostAlunoTurma();
  }
}