package com.ltd.sisc.dto;

public class CadastroAlunoCompletoDTO extends CadastroAlunoDTO{
    private  EnderecoDTO enderecoDTO;

    public EnderecoDTO getEnderecoDTO() {
        return enderecoDTO;
    }

    public void setEnderecoDTO(EnderecoDTO enderecoDTO) {
        this.enderecoDTO = enderecoDTO;
    }
}