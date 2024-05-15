package com.ltd.sisc.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CadastroFinanciadorDTO {
    @NotBlank(message = "Nome do financiador não pode ser vazio ou nulo")
    @Size(message = "O nome não pode ter o tamanho de caracteres menor que zero, nem maior que 100",min = 0,max = 100)
    private String nome;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
