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
  @Input() inputData: number = 0; // Recebe o ID do curso selecionado
  @Output() turmaData = new EventEmitter<any>();

  dataTurma: objTurmaId[] = [];
  turmaSelecionada: objTurmaId | null = null;
  getTurma: objTurma | null = null;

  constructor(
    private turmaService: TurmaService
  ){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputData'] && this.inputData) {
      this.handleGetTurma(this.inputData);
    }
  }

  async handleGetTurma( id: number): Promise<void> {
    this.dataTurma = [];
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