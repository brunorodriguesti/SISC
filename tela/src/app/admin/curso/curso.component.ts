import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoService } from './curso.service'
import { FinanciadorService } from '../financiador/financiador.service'
import { objFinanciadorId } from '../financiador/objFinanciador';
import { objCurso, objCursoId } from '../../inscricao/pergunta/objPergunta'

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent implements OnInit {
  dataFinanciadores: objFinanciadorId[] = []
  cursoSelecionado: string = '';
  nome: string = '';
  objetivo: string = '';
  cargaHoraria: Number = 0;
  
  constructor(private financiadorService: FinanciadorService, private cursoService: CursoService) {}

  ngOnInit(): void {
    
  }

  async handleGetFinanciadores(): Promise<void>{
    try {
      this.dataFinanciadores = await this.financiadorService.getTodosFinanciadores();
    }catch (error){
      console.error('Erro ao buscar os Financiadores:', error);
    }
  }

  onCursoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.cursoSelecionado = target.value;
  }

  handleCadastro(): void {
    if(this.cursoSelecionado !== ""){
      const curso: objCurso = {
        nome: this.nome,
        objetivo: this.objetivo,
        cargaHoraria: this.cargaHoraria
      }
      this.cursoService.postCurso(curso);
      this.nome = ""
      this.objetivo = ""
      this.cargaHoraria = 0
      this.cursoSelecionado = ""
    }
  }
}
