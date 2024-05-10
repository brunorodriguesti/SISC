package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroFinanciadorDTO;
import com.ltd.sisc.dto.FinanciadorDTO;
import com.ltd.sisc.entities.FinanciadorVO;
import com.ltd.sisc.repositories.FinanciadorRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FinanciadorService {

    @Autowired
    private FinanciadorRepository financiadorRepository;
    public void registraFinanciador(CadastroFinanciadorDTO cadastroFinanciadorDTO) {
        try{
            FinanciadorVO financiadorVO = new FinanciadorVO();
            BeanUtils.copyProperties(cadastroFinanciadorDTO,financiadorVO);
            financiadorRepository.save(financiadorVO);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao cadastrar financiador: ").append(e).toString());
        }
    }
    public List<FinanciadorDTO> buscaListaFinanciadoresPorNome(String nome) {
        List<FinanciadorDTO> listaFinanciadores = new ArrayList<>();
        try{
            List<FinanciadorVO> financiadorVOS = financiadorRepository.buscaListaFinanciadores(nome);
            populaListaFinanciadores(listaFinanciadores, financiadorVOS);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao encontrar financiadores: ").append(e).toString());
        }
     return listaFinanciadores;
    }

    private static void populaListaFinanciadores(List<FinanciadorDTO> listaFinanciadores, List<FinanciadorVO> financiadorVOS) {
        if(financiadorVOS != null && !financiadorVOS.isEmpty()){
            for(FinanciadorVO financiadorUnico : financiadorVOS){
                FinanciadorDTO financiadorDTO = new FinanciadorDTO();
                BeanUtils.copyProperties(financiadorUnico,financiadorDTO);
                financiadorDTO.setId(financiadorUnico.getIdFinanciador());
                listaFinanciadores.add(financiadorDTO);
            }
        }
    }
    public FinanciadorDTO buscaCandidatoPorId(Long id) {
        FinanciadorDTO financiadorDTO = new FinanciadorDTO();
        try{
            Optional<FinanciadorVO> financiadorVO = financiadorRepository.findById(id);
            if(financiadorVO != null && financiadorVO.isPresent()){
                BeanUtils.copyProperties(financiadorVO.get(),financiadorDTO);
                financiadorDTO.setId(financiadorVO.get().getIdFinanciador());
            }
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao encontrar financiador: ").append(e).toString());
        }
        return financiadorDTO;
    }

    public List<FinanciadorDTO> buscaTodosFinanciadores() {
        List<FinanciadorDTO> listaFinanciadores = new ArrayList<>();
        try{
            List<FinanciadorVO> todosFinanciadores = financiadorRepository.findAll();
            populaListaFinanciadores(listaFinanciadores, todosFinanciadores);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao encontrar todos os financiadores: ").append(e).toString());

        }
        return listaFinanciadores;
    }
}
