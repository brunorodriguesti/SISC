package com.ltd.sisc.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class CadastroCursoDTO {
    @NotBlank(message = "Nome do curso não pode ser vazio ou nulo")
    private String nome;
    @NotBlank(message = "Objetivo do curso não pode ser vazio ou nulo")
    private String objetivo;


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getObjetivo() {
        return objetivo;
    }

    public void setObjetivo(String objetivo) {
        this.objetivo = objetivo;
    }
}
