import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CadastroTurmaService } from './iframe-modal.services'

@Component({
  selector: 'app-iframe-modal-curso',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './iframe-modal.component.html',
  styleUrl: './iframe-modal.component.scss'
})
export class IframeModalComponent {
  nome: string | null = null;
  objetivo: string | null = null;

  constructor(
    private dialogRef: MatDialogRef<IframeModalComponent>,
    private cadastroService: CadastroTurmaService
  ) {}

  onCadastroSucesso(): void {
    if (!this.nome || !this.objetivo) { console.log("Dados nulos para o cadastro do candidato do curso") ; return};
    console.log('Dados para o cadastro da turma:', this.nome)
    let curso = {
      nome: this.nome,
      objetivo: this.objetivo
    }
    this.cadastroService.postCurso(curso).then(() => {
      console.log('Cadastro realizado com sucesso!');
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
