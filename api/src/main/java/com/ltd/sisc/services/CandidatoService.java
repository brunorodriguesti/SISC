package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroCandidatoDTO;
import com.ltd.sisc.entities.CandidatoVO;
import com.ltd.sisc.repositories.CandidatoRepository;
import com.ltd.sisc.utils.UtilSISC;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CandidatoService {
    @Autowired
    private CandidatoRepository candidatoRepository;
    public void registraCandidato(CadastroCandidatoDTO cadastroCandidatoDTO) {
        try{
            cadastroCandidatoDTO.setCpf(cadastroCandidatoDTO.getCpf().replaceAll("\\D",""));
            CandidatoVO candidatoVO = new CandidatoVO();
            BeanUtils.copyProperties(cadastroCandidatoDTO,candidatoVO);
            candidatoRepository.save(candidatoVO);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao cadastrar candidato: ").append(e).toString());
        }
    }
    public CadastroCandidatoDTO buscaCandidatoPorCpf(String cpf) {
        CadastroCandidatoDTO cadastroCandidatoDTO = new CadastroCandidatoDTO();
        if(!UtilSISC.isCPF(cpf)){
            UtilSISC.retornaErroRegraDeNegocio("CPF digitado invalido! Favor digitar um cpf valido");
        }
        try{
            CandidatoVO candidatoVO = candidatoRepository.findFirstByCpf(cpf);
            if(candidatoVO != null){
                BeanUtils.copyProperties(candidatoVO,cadastroCandidatoDTO);
            }
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao buscar candidato por cpf: ").append(e).toString());
        }
        return cadastroCandidatoDTO;
    }
    public List<CadastroCandidatoDTO> buscaTodosCandidatos() {
        List<CadastroCandidatoDTO> listaCandidatos = new ArrayList<>();
        try{
            List<CandidatoVO> listaTodosCandidatos = candidatoRepository.findAll();
            populaListaTodosOsCandidatos(listaCandidatos, listaTodosCandidatos);
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao buscar todos os candidatos: ").append(e).toString());
        }
        return listaCandidatos;
    }
    private static void populaListaTodosOsCandidatos(List<CadastroCandidatoDTO> listaCandidatos, List<CandidatoVO> listaTodosCandidatos) {
        if(listaTodosCandidatos != null && !listaTodosCandidatos.isEmpty()) {
            for(CandidatoVO candidatoUnico : listaTodosCandidatos){
                CadastroCandidatoDTO cadastroCandidatoDTO = new CadastroCandidatoDTO();
                BeanUtils.copyProperties(candidatoUnico,cadastroCandidatoDTO);
                listaCandidatos.add(cadastroCandidatoDTO);
            }
        }
    }

    public CadastroCandidatoDTO buscaCandidatoPorId(Long id) {
        CadastroCandidatoDTO cadastroCandidatoDTO = new CadastroCandidatoDTO();
        try{
            Optional<CandidatoVO> candidatoVO = candidatoRepository.findById(id);
            if(candidatoVO != null && candidatoVO.isPresent()){
                BeanUtils.copyProperties(candidatoVO.get(),cadastroCandidatoDTO);
            }
        }catch (Exception e){
            throw  new ExpressionException(new StringBuilder().append("Erro ao buscar candidato por cpf: ").append(e).toString());
        }
        return cadastroCandidatoDTO;
    }
}
