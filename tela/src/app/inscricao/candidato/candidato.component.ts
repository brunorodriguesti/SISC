import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CandidatoService } from './candidato.service';
import { objPessoaPost, objPessoaId } from '../DTO';

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

  cpfInvalido: boolean = false;
  emailInvalido: boolean = false;

  id!: number | null;
  nome!: string | null;
  cpf!: string | null;
  cep!: string | null;
  nomeMae!: string | null;
  email!: string | null;
  telefone!: string | null;
  celular!: string | null;
  dataNascimento!: string | null;
  carteiraIdentidade!: string | null;
  orgaoEmissor!: string | null;
  pisPasep!: string | null;
  numeroCTPS!: string | null;
  serieCTPS!: string | null;
  sexo!: string | null;
  complemento!: string | null;
  numeroLocalidade!: number | null;

  constructor(
    private candidatoService: CandidatoService
  ){}

  async validarCPF() {
    const regex = /^[0-9]{11}$/;
    if (!this.cpf) return;
    this.cpfInvalido = !regex.test(this.cpf.replace(/\D/g, ''));

    if (!this.cpfInvalido) return;
    const canditato = await this.candidatoService.getCPF(this.cpf)

    if (!canditato) return;
    this.id = canditato?.id;
    this.nome = canditato?.nome;
    this.cep = canditato?.cep;
    this.nomeMae = canditato?.nomeMae;
    this.email = canditato?.email;
    this.telefone = canditato?.telefone;
    this.celular = canditato?.celular;
    this.dataNascimento = canditato?.dataNascimento;
    this.carteiraIdentidade = canditato?.carteiraIdentidade;
    this.orgaoEmissor = canditato?.orgaoEmissor;
    this.pisPasep = canditato?.pisPasep;
    this.numeroCTPS = canditato?.numeroCTPS;
    this.serieCTPS = canditato?.serieCTPS;
    this.sexo = canditato?.sexo;
    this.complemento = canditato?.enderecoDTO?.complemento;
    this.numeroLocalidade = canditato?.enderecoDTO?.numeroLocalidade;
  }

  validarEmail() {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!this.email) return;
    this.emailInvalido = !regex.test(this.email);
  }

  enviarDados() {
    if (!this.id) {
      this.id = 0;
    }
    if (this.cpfInvalido || this.emailInvalido) return;

    if (!this.nome || !this.cpf || !this.cep || !this.nomeMae || !this.dataNascimento) return;

    const dadosCandidato: objPessoaPost = {
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
      serieCTPS: this.serieCTPS,
      sexo: this.sexo,
      complemento: this.complemento,
      numeroLocalidade: this.numeroLocalidade
    };
    this.candidatoData.emit({id: this.id, candidato: dadosCandidato});
  }

  onCandidatoChange(event: any) {
    this.enviarDados();
  }
}