import { Component } from '@angular/core';
import { CandidatoComponent } from './candidato/candidato.component'
import { PerguntaComponent } from './pergunta/pergunta.component'
import { objPessoa } from './DTO';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CandidatoComponent, PerguntaComponent],
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})

export class InscricaoComponent {

  onAtivarPerguntas(){
  }
}
