package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroAlunoDTO;
import com.ltd.sisc.dto.EnderecoDTO;
import com.ltd.sisc.services.EnderecoServiceInterface;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {
    @Autowired
    private EnderecoServiceInterface enderecoServiceInterface;

    @GetMapping
    public ResponseEntity buscaEndereco(@RequestParam(required = true,value = "cep") String cep) {
        EnderecoDTO enderecoDTO = new EnderecoDTO();
        try {
            String cepTratado = cep.replaceAll("\\D","");
            EnderecoDTO endereco = enderecoServiceInterface.getEndereco(cepTratado);
            BeanUtils.copyProperties(endereco, enderecoDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar endereco por CEP").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(enderecoDTO);
    }
}
