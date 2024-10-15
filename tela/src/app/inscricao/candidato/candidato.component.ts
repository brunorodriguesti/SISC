import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CandidatoService } from './candidato.service';
import { objPessoaId } from '../DTO';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})

export class CandidatoComponent {
  @Output() candidatoData = new EventEmitter<any>();

  id: number = 0;
  nome: string = "";
  cpf: string = "";
  cep: string = "";
  nomeMae: string = "";
  email: string = "";
  telefone: string = "";
  celular: string = "";
  dataNascimento: string = "";
  carteiraIdentidade: string = "";
  orgaoEmissor: string = "";
  pisPasep: string = "";
  numeroCTPS: string = "";
  serieCTPS: string = "";
  sexo: string = '';

  constructor(
    private candidatoService: CandidatoService
  ){}

  ngOnInit(): void {}

  enviarDados() {
    const dadosCandidato: objPessoaId = {
      id: this.id,
      nome: this.nome,
      cpf: this.candidatoService.limparMascara(this.cpf),
      cep: this.candidatoService.limparMascara(this.cep),
      nomeMae: this.nomeMae,
      email: this.email,
      telefone: this.telefone,
      celular: this.celular,
      dataNascimento: this.candidatoService.formatarDataParaEnvio(this.dataNascimento),
      carteiraIdentidade: this.carteiraIdentidade,
      orgaoEmissor: this.orgaoEmissor,
      pisPasep: this.pisPasep,
      numeroCTPS: this.numeroCTPS,
      serieCTPS: this.serieCTPS
    };
    this.candidatoData.emit(dadosCandidato);
  }

  onCandidatoChange(event: any) {
    this.enviarDados();
  }
}
