package com.ltd.sisc.controllers;


import com.ltd.sisc.dto.CadastroCursoDTO;
import com.ltd.sisc.dto.CadastroFinanciadorDTO;
import com.ltd.sisc.dto.CursoDTO;
import com.ltd.sisc.services.CursoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/curso")
public class CursoController {
    @Autowired
    private CursoService cursoService;


    @PostMapping
    public ResponseEntity registraCurso(@Valid @RequestBody CadastroCursoDTO cadastroCursoDTO ){
        try{
            cursoService.registrarCurso(cadastroCursoDTO);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao salvar curso, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Curso cadastrado com sucesso!");
    }

    @GetMapping
    public ResponseEntity buscaListaCursosPorNome(@RequestParam(required = true,value = "nome") String nome){
       List<CursoDTO> listaCursos = new ArrayList<>();
        try{
            listaCursos = cursoService.buscaListaCursosPorNome(nome);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao salvar curso, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.OK).body(listaCursos);
    }
    @GetMapping(path = "/todosCursos")
    public ResponseEntity buscaTodosCursos(){
        List<CursoDTO> listaCursos = new ArrayList<>();
        try{
            listaCursos = cursoService.buscaTodosCursos();
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao salvar curso, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.OK).body(listaCursos);
    }
    @GetMapping(path = "/id")
    public ResponseEntity buscaCursoPorId(@RequestParam(required = true,value = "id") Long id){
       CursoDTO cursoDTO = new CursoDTO();
        try{
            cursoDTO = cursoService.buscaCursoPorId(id);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao salvar curso, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.OK).body(cursoDTO);
    }
}
