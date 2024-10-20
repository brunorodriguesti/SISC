package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroObjetivoDTO;
import com.ltd.sisc.dto.CadastroParametrosDTO;
import com.ltd.sisc.dto.ObjetivoDTO;
import com.ltd.sisc.dto.ParametroDTO;
import com.ltd.sisc.services.ObjetivoService;
import com.ltd.sisc.services.ParametroService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/parametro")
public class ParametroController {

    @Autowired
    private ParametroService parametroService;

    @PostMapping
    public ResponseEntity registraParametro(@Valid @RequestBody CadastroParametrosDTO cadastroParametrosDTO){
        try{
            parametroService.registraParametro(cadastroParametrosDTO);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar parametro, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Parametro cadastrado com sucesso");
    }

    @GetMapping(path = "/id")
    public ResponseEntity buscaParametroPorId(@RequestParam(required = true,value = "id") Long idParametro) {
        ParametroDTO parametroDTO = new ParametroDTO();
        try {
            parametroDTO = parametroService.buscaParametroPorId(idParametro);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar parametro por id").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(parametroDTO);
    }

    @GetMapping(path = "/todosParametros")
    public ResponseEntity buscaTodosParametros() {
        List<ParametroDTO> listaTodosParametros = new ArrayList<>();
        try {
            listaTodosParametros = parametroService.buscaTodosParametros();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar todos parametros ").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosParametros);
    }

    @GetMapping(path = "/parametros")
    public ResponseEntity buscaTodosObjetivosAtivos() {
        List<ParametroDTO> listaTodosParametros = new ArrayList<>();
        try {
            listaTodosParametros = parametroService.buscaTodosParametrosAtivos();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar parametros ativos").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosParametros);
    }

}
