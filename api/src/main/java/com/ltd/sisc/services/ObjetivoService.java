package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroAlunoCompletoDTO;
import com.ltd.sisc.dto.CadastroObjetivoDTO;
import com.ltd.sisc.dto.ObjetivoDTO;
import com.ltd.sisc.entities.ObjetivoVO;
import com.ltd.sisc.exceptions.ExceptionGenerica;
import com.ltd.sisc.repositories.ObjetivoRepository;
import com.ltd.sisc.utils.UtilSISC;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ObjetivoService {

    @Autowired
    private ObjetivoRepository objetivoRepository;

    public void registraObjetivo(@Valid CadastroObjetivoDTO cadastroObjetivoDTO) {
        try{
            ObjetivoVO objetivoVO = new ObjetivoVO();
            BeanUtils.copyProperties(cadastroObjetivoDTO,objetivoVO);
            objetivoVO.setSituacao(true);
            objetivoRepository.save(objetivoVO);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao cadastrar objetivo: ").append(e).toString());
        }

    }

    public List<ObjetivoDTO> buscaTodosObjetivosAtivos() {
        List<ObjetivoDTO> objetivoDTOList = new ArrayList<>();
        try{
            List<ObjetivoVO> objetivosAtivos = objetivoRepository.findBySituacao(true);
            if(objetivosAtivos != null && !objetivosAtivos.isEmpty()){
                for(ObjetivoVO unico: objetivosAtivos){
                    ObjetivoDTO objetivoDTO = new ObjetivoDTO();
                    BeanUtils.copyProperties(unico,objetivoDTO);
                    objetivoDTOList.add(objetivoDTO);
                }
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao recuperar objetivos ativos: ").append(e).toString());
        }
        return objetivoDTOList;
    }

    public ObjetivoDTO buscaObjetivoPorId(Long idObjetivo) {
        ObjetivoDTO objetivoDTO = new ObjetivoDTO();
        try{
            Optional<ObjetivoVO> objetivoVO = objetivoRepository.findById(idObjetivo);
            if(objetivoVO == null || !objetivoVO.isPresent()){
                UtilSISC.retornaErroRegraDeNegocio("Objetivo não encontrado, o mesmo não foi cadastrado ou não consta na base de dados");
            }
            BeanUtils.copyProperties(objetivoVO,objetivoDTO);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao recuperar objetivo: ").append(e).toString());
        }
        return objetivoDTO;
    }


    public List<ObjetivoDTO> buscaTodosObjetivos() {
        List<ObjetivoDTO> objetivoDTOList = new ArrayList<>();
        try{
            List<ObjetivoVO> objetivosAtivos = objetivoRepository.findAll();
            if(objetivosAtivos != null && !objetivosAtivos.isEmpty()){
                for(ObjetivoVO unico: objetivosAtivos){
                    ObjetivoDTO objetivoDTO = new ObjetivoDTO();
                    BeanUtils.copyProperties(unico,objetivoDTO);
                    objetivoDTOList.add(objetivoDTO);
                }
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao recuperar objetivos ativos: ").append(e).toString());
        }
        return objetivoDTOList;
    }
}
