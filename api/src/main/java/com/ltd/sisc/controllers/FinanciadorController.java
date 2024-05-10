package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroCandidatoDTO;
import com.ltd.sisc.dto.CadastroFinanciadorDTO;
import com.ltd.sisc.dto.FinanciadorDTO;
import com.ltd.sisc.services.FinanciadorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/financiador")
public class FinanciadorController {

    @Autowired
    private FinanciadorService financiadorService;


    @PostMapping
    public ResponseEntity registraFinanciador(@Valid @RequestBody CadastroFinanciadorDTO cadastroFinanciadorDTO ){
        try{
            financiadorService.registraFinanciador(cadastroFinanciadorDTO);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar financiador, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Financiador cadastrado com sucesso");
    }

    @GetMapping
    public ResponseEntity buscaListaFinanciadoresPorNome(@RequestParam(required = true,value = "nome") String nome){
        List<FinanciadorDTO> listaFinanciadorDTO = new ArrayList<>();
        try{
            listaFinanciadorDTO = financiadorService.buscaListaFinanciadoresPorNome(nome);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar financiador, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.OK).body(listaFinanciadorDTO);
    }

    @GetMapping(path = "/id")
    public ResponseEntity buscaFinanaciadororId(@RequestParam(required = true,value = "id") Long id) {
        FinanciadorDTO financiadorDTO = new FinanciadorDTO();
        try {
            financiadorDTO = financiadorService.buscaCandidatoPorId(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por id").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(financiadorDTO);
    }

    @GetMapping(path = "/todosFinanciadores")
    public ResponseEntity buscaTodosFinanciadors() {
        List<FinanciadorDTO> listaTodosFinanciadores = new ArrayList<>();
        try {
            listaTodosFinanciadores = financiadorService.buscaTodosFinanciadores();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por id").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosFinanciadores);
    }

}
