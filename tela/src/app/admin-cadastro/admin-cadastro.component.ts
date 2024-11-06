import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { IframeModalComponent } from './iframe-modal/iframe-modal.component';
import { IframeModalTurmaComponent } from './iframe-modal-turma/iframe-modal-turma.component';
import { MenuComponent } from '../menu/menu.component';
import { CadastroService } from './admin-cadastro.services';
import { objCursoId, objTurmaId } from '../DTO';

@Component({
  selector: 'app-admin-cadastro',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
  ],
  templateUrl: './admin-cadastro.component.html',
  styleUrls: ['./admin-cadastro.component.scss']
})
export class AdminCadastroComponent implements OnInit {
  dataCurso: objCursoId[] = [];
  dataTurma: { [key: number]: objTurmaId[] } = {}; // Armazenamento das turmas por curso

  constructor(
    private cadastroService: CadastroService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.handleGetCursos();
  }

  async handleGetCursos(): Promise<void> {
    try {
      this.dataCurso = await this.cadastroService.getTodosCursos();
      // Para cada curso, carregue as turmas associadas
      for (let curso of this.dataCurso) {
        this.dataTurma[curso.id] = await this.cadastroService.getTurmaIdCurso(curso.id);
      }
    } catch (error) {
      console.error('Erro ao buscar os cursos:', error);
    }
  }

  openIframeModalCurso() {
    this.dialog.open(IframeModalComponent, {
      width: '350px',
      height: '200px',
    });
  }

  openIframeModalTurma(idCurso: number) {
    this.dialog.open(IframeModalTurmaComponent, {
      width: '500px',
      height: '300px',
      data: { idCurso }
    });
  }

}