package com.ltd.sisc.entities;

import jakarta.persistence.*;

@Entity
@Table(name ="tb_opcoes")
public class OpcoesVO {

    private Long idRespostas;
    private String descricao;
    private Integer tipo;
    private Integer pontuacaoDefault;
    private PerguntasVO perguntasVO;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_respostas")
    public Long getIdRespostas() {
        return idRespostas;
    }

    public void setIdRespostas(Long idRespostas) {
        this.idRespostas = idRespostas;
    }
    @Column(name = "descricao")

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    @Column(name = "tipo")
    public Integer getTipo() {
        return tipo;
    }

    public void setTipo(Integer tipo) {
        this.tipo = tipo;
    }
    @Column(name = "pontuacao_default")
    public Integer getPontuacaoDefault() {
        return pontuacaoDefault;
    }

    public void setPontuacaoDefault(Integer pontuacaoDefault) {
        this.pontuacaoDefault = pontuacaoDefault;
    }

    @Transient
    public PerguntasVO getPerguntasVO() {
        return perguntasVO;
    }

    public void setPerguntasVO(PerguntasVO perguntasVO) {
        this.perguntasVO = perguntasVO;
    }
}
