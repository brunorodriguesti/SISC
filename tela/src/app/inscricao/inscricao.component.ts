import { Component } from '@angular/core';
import { CandidatoComponent } from './candidato/candidato.component'
import { PerguntaComponent } from './pergunta/pergunta.component'
import { RoutingInscricao } from './incricao.routes'

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CandidatoComponent, PerguntaComponent, RoutingInscricao],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.scss'
})
export class InscricaoComponent {

}
