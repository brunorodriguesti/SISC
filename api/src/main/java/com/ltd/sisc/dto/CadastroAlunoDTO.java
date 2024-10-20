package com.ltd.sisc.dto;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;

public class CadastroAlunoDTO {

    @NotBlank(message = "O nome precisa ser preenchido!")
    private String nome;
    @NotBlank(message = "O cpf precisa ser preenchido!")
    @CPF(message = "O campo cpf deve ser um cpf valido!")
    private String cpf;
    @NotBlank(message = "O cep precisa ser preenchido!")
    private String cep;
    @NotBlank(message = "O nome da mãe precisa ser preenchido!")
    private String nomeMae;
    @Email
    private String email;
    @Size(message = "Celular precisa ter entre 9 a 11 digitos",max = 11,min = 9)
    private String telefone;
    @Size(message = "Celular precisa ter 11 digitos",max = 11)
    private String celular;
    @NotNull(message = "Data de nascimento é obrigatoria!")
    private LocalDate dataNascimento;
    @Size(message = "Carteira de identidate precisa ter 9 digitos",max = 9,min=9)
    private String carteiraIdentidade;
    @Size(message = "Orgao emissor precisa ter entre 1 a 5 digitos",min = 1,max=5)
    private String orgaoEmissor;
    //@Size(message = "Pis/Pasep   precisa ter 4 digitos",max = 11,min=11)
    private String pisPasep;
    //@Size(message = "Numero ctps precisa ter 7 digitos",max = 7,min=7)
    private String numeroCTPS;
   // @Size(message = "Serie ctps precisa ter 4 digitos",max = 4,min = 4)
    private String serieCTPS;
    @Size(message = "Sexo deve ser somente um caractere",min = 1,max=1)
    private String sexo;
    @Size(message = "Complemento deve ser somente possuir no minimo 1 caractere e no maximo 45",min = 1,max=45)
    private String complemento;
    private Integer numeroLocalidade;


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public  String getCep() {
        return cep;
    }

    public void setCep( String cep) {
        this.cep = cep;
    }

    public  String getNomeMae() {
        return nomeMae;
    }

    public void setNomeMae(String nomeMae) {
        this.nomeMae = nomeMae;
    }

    public  String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone( String telefone) {
        this.telefone = telefone;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular( String celular) {
        this.celular = celular;
    }

    public  LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento( LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getCarteiraIdentidade() {
        return carteiraIdentidade;
    }

    public void setCarteiraIdentidade( String carteiraIdentidade) {
        this.carteiraIdentidade = carteiraIdentidade;
    }

    public String getOrgaoEmissor() {
        return orgaoEmissor;
    }

    public void setOrgaoEmissor(String orgaoEmissor) {
        this.orgaoEmissor = orgaoEmissor;
    }

    public  String getPisPasep() {
        return pisPasep;
    }

    public void setPisPasep(String pisPasep) {
        this.pisPasep = pisPasep;
    }

    public String getNumeroCTPS() {
        return numeroCTPS;
    }

    public void setNumeroCTPS(String numeroCTPS) {
        this.numeroCTPS = numeroCTPS;
    }

    public  String getSerieCTPS() {
        return serieCTPS;
    }

    public void setSerieCTPS(String serieCTPS) {
        this.serieCTPS = serieCTPS;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo( String sexo) {
        this.sexo = sexo;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento( String complemento) {
        this.complemento = complemento;
    }

    public Integer getNumeroLocalidade() {
        return numeroLocalidade;
    }

    public void setNumeroLocalidade(Integer numeroLocalidade) {
        this.numeroLocalidade = numeroLocalidade;
    }
}
