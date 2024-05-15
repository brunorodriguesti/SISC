import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.scss'
})
export class CandidatoComponent {
  @Output() ativarPerguntas: EventEmitter<any> = new EventEmitter();
  nome: string = "";
  cpf: string = "";

  handleClick(): void {
    if(this.nome != "" && this.cpf != ""){
      this.ativarPerguntas.emit();
    }
  }
}
