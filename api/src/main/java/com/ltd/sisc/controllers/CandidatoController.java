package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroCandidatoDTO;
import com.ltd.sisc.services.CandidatoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/candidato")
public class CandidatoController {
    @Autowired
    private CandidatoService candidatoService;

    @PostMapping
    public ResponseEntity registraCandidato(@Valid @RequestBody CadastroCandidatoDTO cadastroCandidatoDTO ){
        try{
            candidatoService.registraCandidato(cadastroCandidatoDTO);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar candidato, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Candidato cadastrado com sucesso");
    }

    @GetMapping(path = "/cpf")
    public ResponseEntity buscaCandidatoPorCpf(@RequestParam(required = true,value = "cpf") String cpf) {
        CadastroCandidatoDTO cadastroCandidatoDTO = new CadastroCandidatoDTO();
        try {
            String cpfTratado = cpf.replaceAll("\\D","");
            cadastroCandidatoDTO = candidatoService.buscaCandidatoPorCpf(cpfTratado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por cpf").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(cadastroCandidatoDTO);
    }

    @GetMapping(path = "/id")
    public ResponseEntity buscaCandidatoPorId(@RequestParam(required = true,value = "id") Long id) {
        CadastroCandidatoDTO cadastroCandidatoDTO = new CadastroCandidatoDTO();
        try {
            cadastroCandidatoDTO = candidatoService.buscaCandidatoPorId(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por id").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(cadastroCandidatoDTO);
    }


    @GetMapping(path = "/todosCandidatos")
    public ResponseEntity buscaTodosCandidatos() {
        List<CadastroCandidatoDTO> listaTodosCandidatos = new ArrayList<>();
        try {
            listaTodosCandidatos = candidatoService.buscaTodosCandidatos();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por cpf").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosCandidatos);
    }

}
