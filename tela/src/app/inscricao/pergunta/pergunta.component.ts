import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PerguntaService } from './pergunta.service';
import { objCursoId } from './objPergunta';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent implements OnInit {
  dataCursos: objCursoId[] = [];
  cursoSelecionado: string = '';

  constructor(private perguntaService: PerguntaService) {}

  ngOnInit(): void {
    this.handleGetCursos();
  }

  async handleGetCursos(): Promise<void> {
    try {
      this.dataCursos = await this.perguntaService.getTodosCursos();
    } catch (error) {
      console.error('Erro ao buscar os cursos:', error);
    }
  }

  onCursoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.cursoSelecionado = target.value;
  }
}