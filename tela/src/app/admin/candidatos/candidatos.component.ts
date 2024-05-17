import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { objPessoa, objPessoaId } from '../../inscricao/objsinscricao'
import { CandidatosService } from './candidatos.service'

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.scss',
  standalone: true,
  imports: [MatCardModule]
})

export class CandidatosComponent {
  dataCandidatos: objPessoaId[] = []
  constructor(private candidatosService: CandidatosService) { }

  ngOnInit(): void{
    this.handleGetCandidatos();
  }

  async handleGetCandidatos(): Promise<void>{
    try {
      this.dataCandidatos = await this.candidatosService.getTodosCandidatos();
    }catch (error){
      console.error('Erro ao buscar os Financiadores:', error);
    }
  }
}
