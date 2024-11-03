import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CandidatoService } from './candidato.service';
// import { objPessoaPost, objPessoaId, objEndereco } from '../DTO';
import { objPessoaPost } from '../DTO';

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
  nome: string | null = null;
  cpf: string | null = null;
  cep: string | null = null;
  nomeMae: string | null = null;
  email: string | null = null;
  telefone: string | null = null;
  celular: string | null = null;
  dataNascimento: string | null = null;
  carteiraIdentidade: string | null = null;
  orgaoEmissor: string | null = null;
  pisPasep: string | null = null;
  numeroCTPS: string | null = null;
  serieCTPS: string | null = null;
  sexo: string | null = null;
  complemento: string | null = null;
  numeroLocalidade: number | null = 0;
  logradouro: string | null = null;
  bairro: string | null = null;

  constructor(
    private candidatoService: CandidatoService
  ){}

  async obterEndereco() {
    console.log("Obtendo Endereço...")
    if (!this.cep) {console.log("CEP não informado"); return};
    const  objEndereco = await this.candidatoService.getEndereco(this.cep)
    if (!objEndereco?.cep) {console.log("Endereço não encontrado"); return};
    this.logradouro = objEndereco.logradouro;
    this.bairro = objEndereco.bairro;
    this.complemento = objEndereco.complemento;
  }

  async validarCPF() {
    console.log("Validar CPF")
    const regex = /^[0-9]{11}$/;
    if (!this.cpf) {console.log("CPF não informado"); return};
    this.cpfInvalido = regex.test(this.cpf.replace(/\D/g, ''));

    if (!this.cpfInvalido) {console.log("CPF invalido!!"); return};
    const canditato = await this.candidatoService.getCPF(this.cpf)
    console.log("request ao canditato:", canditato)

    if (!canditato?.nome) {console.log("Dados do candidato não encontrados"); return};
    this.id = canditato?.id;
    this.nome = canditato?.nome;
    this.cep = canditato?.cep;
    this.nomeMae = canditato?.nomeMae;
    this.email = canditato?.email;
    this.telefone = canditato?.telefone;
    this.celular = canditato?.celular;
    this.dataNascimento = this.candidatoService.formatarDataRecebido(canditato?.dataNascimento);
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