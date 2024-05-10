package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroCursoDTO;
import com.ltd.sisc.dto.CursoDTO;
import com.ltd.sisc.entities.CursoVO;
import com.ltd.sisc.repositories.CursoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CursoService {
    @Autowired
    private CursoRepository cursoRepository;
    public void registrarCurso(CadastroCursoDTO cadastroCursoDTO) {
        try{
            CursoVO cursoVO = new CursoVO();
            BeanUtils.copyProperties(cadastroCursoDTO,cursoVO);
            cursoRepository.save(cursoVO);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao cadastrar curso: ").append(e).toString());
        }
    }

    public List<CursoDTO> buscaListaCursosPorNome(String nome) {
        List<CursoDTO> listaCursos = new ArrayList<>();
        try{
            List<CursoVO> cursoVOS = cursoRepository.buscaCursosPorNome(nome);
            populaListaCursos(listaCursos, cursoVOS);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao buscar cursos por nome: ").append(e).toString());
        }
        return listaCursos;
    }

    private static void populaListaCursos(List<CursoDTO> listaCursos, List<CursoVO> cursoVOS) {
        if(cursoVOS != null && !cursoVOS.isEmpty()){
            for(CursoVO cursoUnico : cursoVOS){
                CursoDTO cursoDTO = new CursoDTO();
                BeanUtils.copyProperties(cursoUnico,cursoDTO);
                cursoDTO.setId(cursoUnico.getIdCurso());
                listaCursos.add(cursoDTO);
            }
        }
    }

    public List<CursoDTO> buscaTodosCursos() {
        List<CursoDTO> listaCursos = new ArrayList<>();
        try{
            List<CursoVO> cursoVOS = cursoRepository.findAll();
            populaListaCursos(listaCursos, cursoVOS);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao buscar todos os cursos: ").append(e).toString());
        }
        return listaCursos;
    }

    public CursoDTO buscaCursoPorId(Long id) {
        CursoDTO cursoDTO = new CursoDTO();
        try{
            Optional<CursoVO> cursoVO = cursoRepository.findById(id);
            if(cursoVO != null && cursoVO.isPresent()){
                BeanUtils.copyProperties(cursoVO.get(),cursoDTO);
                cursoDTO.setId(cursoVO.get().getIdCurso());
            }
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao buscar curso por id: ").append(e).toString());
        }
        return cursoDTO;
    }
}
