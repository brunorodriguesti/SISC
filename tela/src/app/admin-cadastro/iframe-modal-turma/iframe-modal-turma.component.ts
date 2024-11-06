import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CadastroCursoService } from './iframe-modal-turma.services'

@Component({
  selector: 'app-iframe-modal-turma',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  templateUrl: './iframe-modal-turma.component.html',
  styleUrl: './iframe-modal-turma.component.scss'
})
export class IframeModalTurmaComponent {
  dataInicio: string | null = null;
  dataFim: string | null = null;
  hora: string | null = null;
  numeroMaximoAlunos: number | null = null;
  cursoId: number | null = null;

  constructor(
    private dialogRef: MatDialogRef<IframeModalTurmaComponent>,
    private cadastroService: CadastroCursoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cursoId = data.idCurso;
  }

  onCadastroSucesso(): void {
    if (!this.dataInicio || !this.dataFim || !this.hora || !this.numeroMaximoAlunos || !this.cursoId) { "Dados nulos para o cadastro do candidato do curso" ; return};
    let turma = {
      dataInicio: this.cadastroService.formatarDataParaEnvio(this.dataInicio),
      dataFim: this.cadastroService.formatarDataParaEnvio(this.dataFim),
      hora: this.cadastroService.formatToTime(this.hora),
      numeroMaximoAlunos: this.numeroMaximoAlunos,
      idCurso: this.cursoId
    }
    console.log(turma)
    this.cadastroService.postTurma(turma).then(() => {
      // Fecha o modal
      this.fecharModal();
    }).catch(error => {
      console.error('Erro ao cadastrar aluno na turma:', error);
    });
  }

  fecharModal(): void {
    // Fecha o modal quando o botão de fechar for clicado
    this.dialogRef.close();
  }
}
