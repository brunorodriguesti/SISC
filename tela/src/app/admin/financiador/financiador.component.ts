import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FinanciadorService } from './financiador.service';
import { objFinanciador, objFinanciadorId } from './objFinanciador';

@Component({
  selector: 'app-financiador',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './financiador.component.html',
  styleUrl: './financiador.component.scss'
})
export class FinanciadorComponent {
  nome: string = "";
  mensagem: string = "";

  constructor(private financiadorService: FinanciadorService) { }

  handleCadastro(): void {
    this.financiadorService.postFinanciador(this.nome).subscribe(
      (response) => {
        console.log("handleCadastro()", response);
        this.mensagem = 'Cadastro realizado com sucesso';
      },
      (error) => {
        console.log("handleCadastro()", error);
        this.mensagem = 'Erro ao cadastrar candidato';
      }
    );
  }
}
