package com.ltd.sisc.dto;

import jakarta.validation.constraints.Size;

public class CadastroParametrosDTO {
    @Size(message = "Objetivo precisa ter no minimo 3 caracteres e no maximo 100",max = 100,min = 3)
    private String descricao;
    private Integer peso;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }
}
