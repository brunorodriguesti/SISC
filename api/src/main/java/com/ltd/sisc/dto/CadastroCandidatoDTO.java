package com.ltd.sisc.dto;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.br.CPF;

public class CadastroCandidatoDTO {

    @NotBlank(message = "O nome precisa ser preenchido!")
    private String nome;
    @NotBlank(message = "O cpf precisa ser preenchido!")
    @CPF(message = "O campo cpf deve ser um cpf valido!")
    private String cpf;

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
}
