import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CandidatoService } from './candidato.service';
import { CursoService } from './curso.service';
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
  dataCurso: objCursoId[] = [
    {
      id: 1,
      nome: 'Informatica',
      objetivo: 'Curso de 40hrs de informática'
    },
    {
      id: 2,
      nome: 'Cabelereiro',
      objetivo: 'Curso de 20hrs de Cabelereiro'
    },
    {
      id: 3,
      nome: 'Custureira',
      objetivo: 'Curso de 20hrs de Custureira'
    }
  ]
  dataTurma: objTurma[] = [
    {
      dataInicio: "2024-10-14",
      dataFim: "2024-10-25",
      hora: "07:00:00",
      numeroMaximoAlunos: 0,
      cadastroAlunoDTOList: [],
      cursoDTO: {
        id: 1,
        nome: "Informatica",
        objetivo: "Curso de 40hrs de informática"
      }
    },
    {
      dataInicio: "2024-10-14",
      dataFim: "2024-10-25",
      hora: "07:00:00",
      numeroMaximoAlunos: 0,
      cadastroAlunoDTOList: [],
      cursoDTO: {
        id: 1,
        nome: "Informatica",
        objetivo: "Curso de 40hrs de informática"
      }
    },
    {
      dataInicio: "2024-10-14",
      dataFim: "2024-10-18",
      hora: "07:00:00",
      numeroMaximoAlunos: 0,
      cadastroAlunoDTOList: [],
      cursoDTO: {
        id: 2,
        nome: "Cabelereiro",
        objetivo: "Curso de 20hrs de Cabelereiro"
      }
    }
  ];
  cursoSelecionado: string = '';
  nome: string = "";
  cpf: string = "";
  getObjpessoa: objPessoa = { nome: "", cpf: "" };

  constructor(private candidatoService: CandidatoService, private cursoService: CursoService) { }

  ngOnInit(): void {
    // this.handleGetCursos();
    this.dataCurso
  }

  async handleGetCursos(): Promise<void> {
    try {
      this.dataCurso = await this.cursoService.getTodosCursos();
      console.log(this.dataCurso);
    } catch (error) {
      console.error('Erro ao buscar os cursos:', error);
    }
  }

  onCursoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.cursoSelecionado = target.value;
  }

  onTurmaChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.cursoSelecionado = target.value;
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