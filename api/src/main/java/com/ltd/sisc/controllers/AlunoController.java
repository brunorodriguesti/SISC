package com.ltd.sisc.controllers;

import com.ltd.sisc.dto.CadastroAlunoCompletoDTO;
import com.ltd.sisc.dto.CadastroAlunoDTO;
import com.ltd.sisc.services.AlunoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public ResponseEntity registraAluno(@Valid @RequestBody CadastroAlunoDTO cadastroAlunoDTO){
        try{
            alunoService.registraAluno(cadastroAlunoDTO);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar candidato, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Candidato cadastrado com sucesso");
    }


    @PostMapping("/turma")
    public ResponseEntity registraAlunoTurma(@RequestParam(required = true,value = "idAluno") Long idAluno,@RequestParam(required = true,value = "idTurma") Long idTurma){
        try{
            alunoService.registraAlunoTurma(idAluno,idTurma);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao " +
                    "salvar candidato, tente novamente mais tarde! ").append(e.getMessage()).toString());
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body("Aluno atribuido a turma com sucesso");
    }

    @GetMapping(path = "/cpf")
    public ResponseEntity buscaAlunoPorCpf(@RequestParam(required = true,value = "cpf") String cpf) {
        CadastroAlunoCompletoDTO cadastroAlunoDTO = new CadastroAlunoCompletoDTO();
        try {
            String cpfTratado = cpf.replaceAll("\\D","");
            cadastroAlunoDTO = alunoService.buscaAlunoPorCpf(cpfTratado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por cpf").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(cadastroAlunoDTO);
    }

    @GetMapping(path = "/id")
    public ResponseEntity buscaAlunoPorId(@RequestParam(required = true,value = "id") Long id) {
        CadastroAlunoDTO cadastroAlunoDTO = new CadastroAlunoDTO();
        try {
            cadastroAlunoDTO = alunoService.buscaAlunoPorId(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por id").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(cadastroAlunoDTO);
    }


    @GetMapping(path = "/todosAlunos")
    public ResponseEntity buscaTodosAlunos() {
        List<CadastroAlunoCompletoDTO> listaTodosAlunos = new ArrayList<>();
        try {
            listaTodosAlunos = alunoService.buscaTodosAlunos();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new StringBuilder().append("Erro ao buscar candidato por cpf").append(e.getMessage()).toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(listaTodosAlunos);
    }

}
