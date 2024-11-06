import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { objPessoaId } from '../../DTO';

@Component({
  selector: 'app-iframe-modal-alunos',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  templateUrl: './iframe-modal-alunos.component.html',
  styleUrl: './iframe-modal-alunos.component.scss'
})
export class IframeModalAlunosComponent implements OnInit {
  objPessoaId: objPessoaId[] = [];

  constructor(
    private dialogRef: MatDialogRef<IframeModalAlunosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.objPessoaId = data.listaAlunos;
  }

  ngOnInit(): void {
    this.objPessoaId
  }

  fecharModal(): void {
    // Fecha o modal quando o botão de fechar for clicado
    this.dialogRef.close();
  }
}
