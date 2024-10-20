package com.ltd.sisc.entities;

import jakarta.persistence.*;

@Entity
@Table(name ="Parametro_Selecao")
public class ParametroVO {
    private Long idParametroSelecao;
    private String descricao;
    private Integer peso;
    private boolean situacao;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idParametro_Selecao")
    public Long getIdParametroSelecao() {
        return idParametroSelecao;
    }

    public void setIdParametroSelecao(Long idParametroSelecao) {
        this.idParametroSelecao = idParametroSelecao;
    }
    @Column(name = "descricao")
    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    @Column(name = "peso")
    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }
    @Column(name = "situacao")
    public boolean isSituacao() {
        return situacao;
    }

    public void setSituacao(boolean situacao) {
        this.situacao = situacao;
    }
}
