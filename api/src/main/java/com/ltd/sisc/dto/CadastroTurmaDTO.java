package com.ltd.sisc.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.sql.Time;
import java.time.LocalDate;

public class CadastroTurmaDTO {
    @NotNull(message = "Data Inicio deve ser preenchida")
    private LocalDate dataInicio;
    @NotNull(message = "Data Fim deve ser preenchida")
    private LocalDate dataFim;
    @NotNull(message = "Duração o curso deve ser preenchida")
    private Time hora;
    @NotNull(message = "Quantidade maxima de alunos deve ser inserida")
    private int numeroMaximoAlunos;
    @NotNull(message = "Não é possivel criar um curso sem turma")
    private Long idCurso;


    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio( LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public  LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim( LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public  Time getHora() {
        return hora;
    }

    public void setHora( Time hora) {
        this.hora = hora;
    }


    public int getNumeroMaximoAlunos() {
        return numeroMaximoAlunos;
    }

    public void setNumeroMaximoAlunos( int numeroMaximoAlunos) {
        this.numeroMaximoAlunos = numeroMaximoAlunos;
    }

    public Long getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Long idCurso) {
        this.idCurso = idCurso;
    }
}
