package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroAlunoDTO;
import com.ltd.sisc.dto.CadastroObjetivoDTO;
import com.ltd.sisc.dto.ObjetivoDTO;
import com.ltd.sisc.services.ObjetivoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/objetivo")
public class ObjetivoController {

    @Autowired
    private ObjetivoService objetivoService;

    @PostMapping
    public ResponseEntity registraObjetivo(@Valid @RequestBody CadastroObjetivoDTO cadastroObjetivoDTO){
        try{
            objetivoService.registraObjetivo(cadastroObjetivoDTO);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar objetivo, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Objetivo cadastrado com sucesso");
    }

    @GetMapping(path = "/id")
    public ResponseEntity buscaObjetivoPorId(@RequestParam(required = true,value = "id") Long idObjetivo) {
        ObjetivoDTO objetivoDTO = new ObjetivoDTO();
        try {
            objetivoDTO = objetivoService.buscaObjetivoPorId(idObjetivo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar objetivo por id").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(objetivoDTO);
    }

    @GetMapping(path = "/todosObjetivos")
    public ResponseEntity buscaObjetivos() {
        List<ObjetivoDTO> listaTodosObjetivos = new ArrayList<>();
        try {
            listaTodosObjetivos = objetivoService.buscaTodosObjetivos();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar objetivos ativos").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosObjetivos);
    }

    @GetMapping(path = "/objetivos")
    public ResponseEntity buscaTodosObjetivosAtivos() {
        List<ObjetivoDTO> listaTodosObjetivos = new ArrayList<>();
        try {
            listaTodosObjetivos = objetivoService.buscaTodosObjetivosAtivos();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar objetivos ativos").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosObjetivos);
    }

}
