package com.ltd.sisc.entities;

import jakarta.persistence.*;

@Entity
@Table(name ="tb_requisitos_cursos")
public class RequisitosCursoVO {
    private Long id;
    private CursoVO cursoVO;
    private FinanciadorVO financiadorVO;
    private RequisitoVO requisitoVO;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Transient
    public CursoVO getCursoVO() {
        return cursoVO;
    }

    public void setCursoVO(CursoVO cursoVO) {
        this.cursoVO = cursoVO;
    }
    @Transient
    public FinanciadorVO getFinanciadorVO() {
        return financiadorVO;
    }

    public void setFinanciadorVO(FinanciadorVO financiadorVO) {
        this.financiadorVO = financiadorVO;
    }
    @Transient
    public RequisitoVO getRequisitoVO() {
        return requisitoVO;
    }

    public void setRequisitoVO(RequisitoVO requisitoVO) {
        this.requisitoVO = requisitoVO;
    }
}
