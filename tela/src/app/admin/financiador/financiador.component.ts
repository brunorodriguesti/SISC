import { Component, OnInit } from '@angular/core';
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
export class FinanciadorComponent implements OnInit {
  nome: string = "";
  mensagem: string = "";
  dataFinanciadores: objFinanciadorId[] = []

  constructor(private financiadorService: FinanciadorService) { }

  ngOnInit(): void{
    this.handleGetFinanciadores();
  }

  handleCadastro(): void {
    const financiador: objFinanciador = {
      nome: this.nome
    }
    this.financiadorService.postFinanciador(financiador);
    this.nome = ""
  }

  async handleGetFinanciadores(): Promise<void>{
    try {
      this.dataFinanciadores = await this.financiadorService.getTodosFinanciadores();
    }catch (error){
      console.error('Erro ao buscar os Financiadores:', error);
    }
  }
}
