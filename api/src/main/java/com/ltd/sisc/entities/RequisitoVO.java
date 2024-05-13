package com.ltd.sisc.entities;

import jakarta.persistence.*;

@Entity
@Table(name ="tb_requisitos")
public class RequisitoVO {

    private Long idRequisito;
    private String descricaoRequisito;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_requisito")
    public Long getIdRequisito() {
        return idRequisito;
    }

    public void setIdRequisito(Long idRequisito) {
        this.idRequisito = idRequisito;
    }

    @Column(name = "descricao_requisito")
    public String getDescricaoRequisito() {
        return descricaoRequisito;
    }

    public void setDescricaoRequisito(String descricaoRequisito) {
        this.descricaoRequisito = descricaoRequisito;
    }
}
