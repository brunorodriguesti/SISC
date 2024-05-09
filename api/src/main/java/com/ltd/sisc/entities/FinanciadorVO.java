package com.ltd.sisc.entities;

import jakarta.persistence.*;

@Entity
@Table(name ="tb_financiador")
public class FinanciadorVO {

    private Long idFinanciador;
    private String nome;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_financiador")
    public Long getIdFinanciador() {
        return idFinanciador;
    }

    public void setIdFinanciador(Long idFinanciador) {
        this.idFinanciador = idFinanciador;
    }

    @Column(name = "nome")
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
