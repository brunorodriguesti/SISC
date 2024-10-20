package com.ltd.sisc.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name ="Aluno")
public class AlunoVO {
    private Long idAluno;
    private String nome;
    private String cpf;
    private String cep;
    private String nomeMae;
    private String email;
    private String telefone;
    private String celular;
    private LocalDate dataNascimento;
    private String carteiraIdentidade;
    private String orgaoEmissor;
    private String pisPasep;
    private String numeroCTPS;
    private String serieCTPS;
    private boolean situacao;
    private TurmaVO turmaVO;
    private EnderecoVO enderecoVO;
    private String sexo;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAluno")
    public Long getIdAluno() {
        return idAluno;
    }

    public void setIdAluno(Long idAluno) {
        this.idAluno = idAluno;
    }

    @Column(name = "nome")
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    @Column(name = "cpf")
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Column(name = "cep")
    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
    @Column(name = "nome_mae")
    public String getNomeMae() {
        return nomeMae;
    }

    public void setNomeMae(String nomeMae) {
        this.nomeMae = nomeMae;
    }
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    @Column(name = "telefone")
    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    @Column(name = "celular")
    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }
    @Column(name = "data_nascimento")
    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    @Column(name = "carteira_identidade")
    public String getCarteiraIdentidade() {
        return carteiraIdentidade;
    }

    public void setCarteiraIdentidade(String carteiraIdentidade) {
        this.carteiraIdentidade = carteiraIdentidade;
    }
    @Column(name = "orgao_emissor")
    public String getOrgaoEmissor() {
        return orgaoEmissor;
    }

    public void setOrgaoEmissor(String orgaoEmissor) {
        this.orgaoEmissor = orgaoEmissor;
    }
    @Column(name = "pis_pasep")
    public String getPisPasep() {
        return pisPasep;
    }

    public void setPisPasep(String pisPasep) {
        this.pisPasep = pisPasep;
    }
    @Column(name = "numero_ctps")
    public String getNumeroCTPS() {
        return numeroCTPS;
    }

    public void setNumeroCTPS(String numeroCTPS) {
        this.numeroCTPS = numeroCTPS;
    }
    @Column(name = "serie_ctps")
    public String getSerieCTPS() {
        return serieCTPS;
    }

    public void setSerieCTPS(String serieCTPS) {
        this.serieCTPS = serieCTPS;
    }
    @Column(name = "situacao")
    public boolean isSituacao() {
        return situacao;
    }

    public void setSituacao(boolean situacao) {
        this.situacao = situacao;
    }

    @ManyToOne
    @JoinColumn(name = "turma_idTurma")
    public TurmaVO getTurmaVO() {
        return turmaVO;
    }

    public void setTurmaVO(TurmaVO turmaVO) {
        this.turmaVO = turmaVO;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_idEndereco")
    public EnderecoVO getEnderecoVO() {
        return enderecoVO;
    }

    public void setEnderecoVO(EnderecoVO enderecoVO) {
        this.enderecoVO = enderecoVO;
    }
    @Column(name="sexo")
    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }


}
