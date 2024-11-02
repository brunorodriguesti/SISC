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
  @Output() candidatoData = new EventEmitter<{ id: number, candidato: objPessoaPost, dadosEnviados: boolean }>();

  cpfInvalido: boolean = false;
  botaoAcionado: boolean = true;

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
  logradouro!: string | null;
  bairro!: string | null;

  constructor(
    private candidatoService: CandidatoService
  ){}

  async validarCPF() {
    console.log("Validar CPF")
    const regex = /^[0-9]{11}$/;
    if (!this.cpf) {console.log("CPF não informado"); return};
    this.cpfInvalido = regex.test(this.cpf.replace(/\D/g, ''));

    if (!this.cpfInvalido) {console.log("CPF invalido!!"); return};
    const canditato = await this.candidatoService.getCPF(this.cpf)
    console.log("canditato:", canditato)

    if (!canditato) {console.log("Dados do candidato não encontrados"); return};
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
    this.logradouro = canditato?.enderecoDTO?.logradouro;
    this.bairro = canditato?.enderecoDTO?.bairro;
  }

  enviarDados() {
    if (!this.id) {
      this.id = 0;
    }
    if (!this.cpfInvalido){console.log("CPF invalido!!", this.cpfInvalido); return;}

    if (!this.nome || !this.cpf || !this.cep || !this.nomeMae || !this.dataNascimento){console.log("Dados Obrigatorio não preenchidos!!"); return};

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
    this.candidatoData.emit({id: this.id, candidato: dadosCandidato, dadosEnviados: true});
    this.botaoAcionado = false;
  }

  onCandidatoChange(event: Event): void {
    console.log('Acionando evento');
    this.enviarDados();
  }
}