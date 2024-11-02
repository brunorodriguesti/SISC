import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TurmaService } from './turma.service';
import { objTurma, objTurmaId } from '../DTO';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, CommonModule],
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnChanges {
  @Input() inputData!: number | null; // Recebe o ID do curso selecionado
  @Output() turmaData = new EventEmitter<any>();

  dataTurma: objTurmaId[] = [];
  turmaSelecionada: objTurmaId | null = null;
  getTurma: objTurma | null = null;
  getTurmaTodos: objTurmaId[] = [];

  constructor(
    private turmaService: TurmaService
  ){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputData'] && this.inputData) {
      this.handleGetTurma(this.inputData);
    }
  }

  async handleGetTurmaTodos(): Promise<void> {
    this.getTurmaTodos = await this.turmaService.getTurmaTodos();
  }

  handleGetTurma( id: number): void {
    this.dataTurma = [];
    if (!id) {console.warn('Curso não foi selecionado'); return};

    if (this.getTurmaTodos.length > 0) {
      this.getTurmaTodos.map(turma => {
        if (turma.cursoDTO.id == id) {
          this.dataTurma.push(turma)
        }
        }
      )
    }
  }

  enviarDados() {
    const dadosTurma = {
      id: this.turmaSelecionada?.id
    };
    this.turmaData.emit(dadosTurma);
  }

  onTurmaChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.turmaSelecionada = this.dataTurma.find(turma => turma.dataInicio === target.value) || null;
    this.enviarDados()
  }
}