package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroTurmaDTO;
import com.ltd.sisc.dto.EnderecoDTO;
import com.ltd.sisc.dto.TurmaDTO;
import com.ltd.sisc.services.TurmaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/turma")
public class TurmaController {
    @Autowired
    private TurmaService turmaService;

    @PostMapping
    public ResponseEntity cadastraTurma(@RequestBody CadastroTurmaDTO cadastroTurmaDTO) {
        try {
            turmaService.cadastraTurma(cadastroTurmaDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao cadastrar turma ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Turma cadastrada com sucesso");
    }


    @GetMapping
    public ResponseEntity buscaTurmaPorId(@RequestParam(required = true,name = "id")Long id) {
        TurmaDTO turmaDTO = new TurmaDTO();
        try {
            turmaDTO = turmaService.buscaTurmaPorId(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao cadastrar turma ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.OK).body(turmaDTO);
    }


    @GetMapping(path = "/todasTurmas")
    public ResponseEntity buscarTodasTurmas() {
        List<TurmaDTO> turmaDTOList = new ArrayList<>();
        try {
            turmaDTOList = turmaService.buscaTodasTurmaAtivas();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar todas turmas ativas ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.OK).body(turmaDTOList);
    }

}
