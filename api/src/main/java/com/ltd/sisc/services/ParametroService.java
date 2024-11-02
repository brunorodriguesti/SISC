package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroObjetivoDTO;
import com.ltd.sisc.dto.CadastroParametrosDTO;
import com.ltd.sisc.dto.ObjetivoDTO;
import com.ltd.sisc.dto.ParametroDTO;
import com.ltd.sisc.entities.ObjetivoVO;
import com.ltd.sisc.entities.ParametroVO;
import com.ltd.sisc.exceptions.ExceptionGenerica;
import com.ltd.sisc.repositories.ObjetivoRepository;
import com.ltd.sisc.repositories.ParametroRepository;
import com.ltd.sisc.utils.UtilSISC;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ParametroService {

    @Autowired
    private ParametroRepository parametroRepository;

    public void registraParametro(@Valid CadastroParametrosDTO cadastroParametrosDTO) {
        try{
            ParametroVO parametroVO = new ParametroVO();
            BeanUtils.copyProperties(cadastroParametrosDTO,parametroVO);
            parametroVO.setSituacao(true);
            parametroRepository.save(parametroVO);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao cadastrar parametro: ").append(e).toString());
        }

    }

    public List<ParametroDTO> buscaTodosParametrosAtivos() {
        List<ParametroDTO> parametroDTOS = new ArrayList<>();
        try{
            List<ParametroVO> parametroVOList = parametroRepository.findBySituacao(true);
            if(parametroVOList != null && !parametroVOList.isEmpty()){
                for(ParametroVO unico: parametroVOList){
                    ParametroDTO parametroDTO = new ParametroDTO();
                    BeanUtils.copyProperties(unico,parametroDTO);
                    parametroDTO.setId(unico.getIdParametroSelecao());
                    parametroDTOS.add(parametroDTO);
                }
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao recuperar parametros ativos: ").append(e).toString());
        }
        return parametroDTOS;
    }

    public ParametroDTO buscaParametroPorId(Long idParametro) {
        ParametroDTO parametroDTO = new ParametroDTO();
        try{
            Optional<ParametroVO> parametroVO = parametroRepository.findById(idParametro);
            if(parametroVO == null || !parametroVO.isPresent()){
                UtilSISC.retornaErroRegraDeNegocio("Parametro não encontrado, o mesmo não foi cadastrado ou não consta na base de dados");
            }
            BeanUtils.copyProperties(parametroVO,parametroDTO);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao recuperar parametros: ").append(e).toString());
        }
        return parametroDTO;
    }


    public List<ParametroDTO> buscaTodosParametros() {
        List<ParametroDTO> parametroDTOS = new ArrayList<>();
        try{
            List<ParametroVO> parametroVOS = parametroRepository.findAll();
            if(parametroVOS != null && !parametroVOS.isEmpty()){
                for(ParametroVO unico: parametroVOS){
                    ParametroDTO parametroDTO = new ParametroDTO();
                    BeanUtils.copyProperties(unico,parametroDTO);
                    parametroDTO.setId(unico.getIdParametroSelecao());
                    parametroDTOS.add(parametroDTO);
                }
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao recuperar todos parametros: ").append(e).toString());
        }
        return parametroDTOS;
    }
}
