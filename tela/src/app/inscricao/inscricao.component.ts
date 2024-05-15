import { Component } from '@angular/core';
import { CandidatoComponent } from './candidato/candidato.component'
import { PerguntaComponent } from './pergunta/pergunta.component'

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CandidatoComponent, PerguntaComponent],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.scss'
})
export class InscricaoComponent {
  seccaoPerguntas: boolean = false
  
  onAtivarPerguntas() {
    this.seccaoPerguntas = true
  }
}
