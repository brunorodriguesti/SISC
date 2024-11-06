import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PerguntaService } from './pergunta.service';
import { objParametrosId } from '../../DTO';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule, 
    FormsModule, 
    MatCheckboxModule, 
  ],
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent implements OnInit {
  parametros: objParametrosId[] = [];
  selectedIds: number[] = [];  // Armazena os IDs dos checkboxes selecionados

  constructor(private perguntaService: PerguntaService) {}

  async ngOnInit(): Promise<void> {
    this.parametros = await this.perguntaService.getTodosCursos();
  }

  toggleCheckbox(id: number): void {
    const index = this.selectedIds.indexOf(id);
    if (index > -1) {
      this.selectedIds.splice(index, 1);
    } else {
      this.selectedIds.push(id);
    }
    console.log('IDs selecionados:', this.selectedIds);
  }
}