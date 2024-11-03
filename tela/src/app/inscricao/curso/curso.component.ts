import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CursoService } from './curso.service';
import { objCursoId, objTurmaId } from '../DTO';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, CommonModule],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})

export class CursoComponent {
  @Output() cursoData = new EventEmitter<any>();

  dataCurso: objCursoId[] = [];
  cursoSelecionado: number = 0;

  constructor(
    private cursoService: CursoService
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

  enviarDadosCurso() {
    const dadosCurso = {
      id: this.cursoSelecionado
    };
    this.cursoData.emit(dadosCurso);
  }

  onCursoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.cursoSelecionado = +target.value;
    this.enviarDadosCurso();
  }
}