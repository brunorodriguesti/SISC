package com.ltd.sisc.entities;

import jakarta.persistence.*;

@Entity
@Table(name ="tb_perguntas")
public class PerguntasVO {

    private Long idPerguntas;
    private String descricao;
    private Integer grupo;
    private CandidatoVO candidatoVO;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pergunta")
    public Long getIdPerguntas() {
        return idPerguntas;
    }

    public void setIdPerguntas(Long idPerguntas) {
        this.idPerguntas = idPerguntas;
    }

    @Column(name = "descricao")
    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Column(name = "grupo")
    public Integer getGrupo() {
        return grupo;
    }

    public void setGrupo(Integer grupo) {
        this.grupo = grupo;
    }

    @Transient
    public CandidatoVO getCandidatoVO() {
        return candidatoVO;
    }

    public void setCandidatoVO(CandidatoVO candidatoVO) {
        this.candidatoVO = candidatoVO;
    }
}
