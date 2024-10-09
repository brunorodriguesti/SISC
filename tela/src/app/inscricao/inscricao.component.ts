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
  seccaoPerguntas: boolean = false;
  dadosCandidato!: objPessoa;

  onAtivarPerguntas(objCandidato: objPessoa){
    this.seccaoPerguntas = true;
    this.dadosCandidato = {nome: objCandidato.nome, cpf: objCandidato.cpf};
    console.log("Componente Pai", this.dadosCandidato);
  }
}
