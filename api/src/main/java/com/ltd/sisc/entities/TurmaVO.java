package com.ltd.sisc.entities;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name="Turma")
public class TurmaVO {

    private Long idTurma;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private Time hora;
    private int numeroMaximoAlunos;
    private List<AlunoVO> alunosVoList;
    private boolean situacao;
    private CursoVO cursoVO;

    @Id
    @Column(name = "idTurma")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getIdTurma() {
        return idTurma;
    }

    public void setIdTurma(Long idTurma) {
        this.idTurma = idTurma;
    }
    @Column(name = "dt_inicio")
    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }
    @Column(name = "dt_fim")
    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }
    @Column(name="hora")
    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }
    @Column(name = "num_max_alunos")
    public int getNumeroMaximoAlunos() {
        return numeroMaximoAlunos;
    }

    public void setNumeroMaximoAlunos(int numeroMaximoAlunos) {
        this.numeroMaximoAlunos = numeroMaximoAlunos;
    }


    @OneToMany(mappedBy = "turmaVO")
    public List<AlunoVO> getAlunosVoList() {
        return alunosVoList;
    }

    public void setAlunosVoList(List<AlunoVO> alunosVoList) {
        this.alunosVoList = alunosVoList;
    }

    @Column(name = "situacao")
    public boolean isSituacao() {
        return situacao;
    }

    public void setSituacao(boolean situacao) {
        this.situacao = situacao;
    }

    @ManyToOne
    @JoinColumn(name="curso_idCurso")
    public CursoVO getCursoVO() {
        return cursoVO;
    }

    public void setCursoVO(CursoVO cursoVO) {
        this.cursoVO = cursoVO;
    }
}
