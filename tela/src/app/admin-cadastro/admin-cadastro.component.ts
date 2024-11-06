import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { IframeModalComponent } from './iframe-modal/iframe-modal.component';
import { IframeModalTurmaComponent } from './iframe-modal-turma/iframe-modal-turma.component';
import { IframeModalAlunosComponent } from './iframe-modal-alunos/iframe-modal-alunos.component';
import { MenuComponent } from '../menu/menu.component';
import { CadastroService } from './admin-cadastro.services';
import { objCursoId, objTurmaId, objPessoaId } from '../DTO';

@Component({
  selector: 'app-admin-cadastro',
  templateUrl: './admin-cadastro.component.html',
  styleUrls: ['./admin-cadastro.component.scss'],
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
  ],
})

export class AdminCadastroComponent implements OnInit {
  dataCurso: objCursoId[] = [];
  dataTurma: { [key: number]: objTurmaId[] } = {};

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
      width: '500px',
      height: '350px',
    });
  }

  openIframeModalTurma(idCurso: number) {
    this.dialog.open(IframeModalTurmaComponent, {
      width: '450px',
      height: '370px',
      data: { idCurso }
    });
  }

  refreshPage(): void {
    this.handleGetCursos();
  }

  VisualizarAlunos(listaAlunos: objPessoaId[]): void {
    this.dialog.open(IframeModalAlunosComponent, {
      width: '550px',
      height: '60%',
      data: { listaAlunos }
    });
  }
}