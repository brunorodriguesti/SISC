import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerguntaService } from './pergunta.service';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule],
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent implements OnInit {
  deficiencia: boolean | null = null;
  alfabetizado: boolean | null = null;
  fundamentalComp: boolean | null = null;
  medioComp: boolean | null = null;
  outroEscolaridade: string = '';
  isOutroEscolaridadeDisabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onAlfabetizadoChange(value: boolean) {
    this.alfabetizado = value;
    if (!value) {
      // Se não for alfabetizado, marque fundamental e médio como false e desabilite o campo "Outros"
      this.fundamentalComp = false;
      this.medioComp = false;
      this.isOutroEscolaridadeDisabled = true;
    }
  }

  onFundamentalCompChange(value: boolean) {
    this.fundamentalComp = value;
    if (value) {
      // Se fundamental for true, médio será false e o campo "Outros" será desabilitado
      this.medioComp = false;
      this.isOutroEscolaridadeDisabled = true;
    } else if (this.fundamentalComp === false && this.medioComp === false) {
      // Se ambos forem false, habilite o campo "Outros"
      this.isOutroEscolaridadeDisabled = false;
    }
  }

  onMedioCompChange(value: boolean) {
    this.medioComp = value;
    if (value) {
      // Se médio for true, habilite o campo "Outros" apenas se fundamental também for false
      this.isOutroEscolaridadeDisabled = true;
    } else if (this.fundamentalComp === false && this.medioComp === false) {
      // Se ambos forem false, habilite o campo "Outros"
      this.isOutroEscolaridadeDisabled = false;
    }
  }
}