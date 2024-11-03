import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InscricaoComponent } from '../inscricao/inscricao.component';

@Component({
  selector: 'app-iframe-modal',
  standalone: true,
  imports: [
    InscricaoComponent,
  ],
  templateUrl: './iframe-modal.component.html',
  styleUrl: './iframe-modal.component.scss'
})
export class IframeModalComponent {
  constructor(private dialogRef: MatDialogRef<IframeModalComponent>) {}

  onCadastroSucesso(): void {
    // Fecha o modal
    this.dialogRef.close();
  }

  fecharModal(): void {
    // Fecha o modal quando o botão de fechar for clicado
    this.dialogRef.close();
  }
}
