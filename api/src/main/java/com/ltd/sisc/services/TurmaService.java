package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroAlunoDTO;
import com.ltd.sisc.dto.CadastroTurmaDTO;
import com.ltd.sisc.dto.CursoDTO;
import com.ltd.sisc.dto.TurmaDTO;
import com.ltd.sisc.entities.AlunoVO;
import com.ltd.sisc.entities.CursoVO;
import com.ltd.sisc.entities.TurmaVO;
import com.ltd.sisc.exceptions.ExceptionGenerica;
import com.ltd.sisc.repositories.CursoRepository;
import com.ltd.sisc.repositories.TurmaRepository;
import com.ltd.sisc.utils.UtilSISC;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TurmaService {

    @Autowired
    private TurmaRepository turmaRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public void cadastraTurma(CadastroTurmaDTO cadastroTurmaDTO) {
        try{
            TurmaVO turmaVO = new TurmaVO();
            BeanUtils.copyProperties(cadastroTurmaDTO,turmaVO);
            Optional<CursoVO> curso = cursoRepository.findById(cadastroTurmaDTO.getIdCurso());
            if(!curso.isPresent()){
                UtilSISC.retornaErroRegraDeNegocio("Curso solicitado não existe, ou não foi cadastrado");
            }
            CursoVO cursoVO = curso.get();
            turmaVO.setCursoVO(cursoVO);
            turmaVO.setSituacao(true);
            turmaRepository.save(turmaVO);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao cadastrar turma: ").append(e).toString());
        }
    }

    public TurmaDTO buscaTurmaPorId(Long id) {
        TurmaDTO turmaDTO = new TurmaDTO();
        try{
            List<CadastroAlunoDTO> alunosDTO = new ArrayList<>();
            Optional<TurmaVO> turmaVO = turmaRepository.findById(id);
            if(turmaVO.isPresent() ){
                TurmaVO turmaUnica = turmaVO.get();
                BeanUtils.copyProperties(turmaUnica,turmaDTO);
                turmaDTO.setNumeroMaximoAlunos(turmaUnica.getNumeroMaximoAluno());
                if(turmaUnica.getAlunosVoList() != null && !turmaUnica.getAlunosVoList().isEmpty() ){
                    for(AlunoVO alunoUnico : turmaUnica.getAlunosVoList()){
                        CadastroAlunoDTO cadastroAlunoDTO = new CadastroAlunoDTO();
                        BeanUtils.copyProperties(alunoUnico,cadastroAlunoDTO);
                        alunosDTO.add(cadastroAlunoDTO);
                    }
                }
                if(turmaUnica.getCursoVO() != null ){
                    CursoDTO cursoDTO = new CursoDTO();
                    BeanUtils.copyProperties(turmaUnica.getCursoVO(),cursoDTO);
                    turmaDTO.setCursoDTO(cursoDTO);
                    cursoDTO.setId(turmaUnica.getCursoVO().getIdCurso());
                }
                turmaDTO.setCadastroAlunoDTOList(alunosDTO);
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao buscar turma por id: ").append(e).toString());
        }

        return turmaDTO;
    }
}
