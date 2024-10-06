package com.ltd.sisc.dto;

import jakarta.validation.constraints.NotNull;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

public class TurmaDTO {

    private LocalDate dataInicio;
    private LocalDate dataFim;
    private Time hora;
    private int numeroMaximoAlunos;
    private List<CadastroAlunoDTO> cadastroAlunoDTOList;
    private CursoDTO cursoDTO;

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    public int getNumeroMaximoAlunos() {
        return numeroMaximoAlunos;
    }

    public void setNumeroMaximoAlunos(int numeroMaximoAlunos) {
        this.numeroMaximoAlunos = numeroMaximoAlunos;
    }

    public List<CadastroAlunoDTO> getCadastroAlunoDTOList() {
        return cadastroAlunoDTOList;
    }

    public void setCadastroAlunoDTOList(List<CadastroAlunoDTO> cadastroAlunoDTOList) {
        this.cadastroAlunoDTOList = cadastroAlunoDTOList;
    }

    public CursoDTO getCursoDTO() {
        return cursoDTO;
    }

    public void setCursoDTO(CursoDTO cursoDTO) {
        this.cursoDTO = cursoDTO;
    }
}
