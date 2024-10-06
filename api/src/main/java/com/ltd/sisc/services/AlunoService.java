package com.ltd.sisc.services;

import com.ltd.sisc.dto.CadastroAlunoCompletoDTO;
import com.ltd.sisc.dto.CadastroAlunoDTO;
import com.ltd.sisc.dto.EnderecoDTO;
import com.ltd.sisc.entities.AlunoVO;
import com.ltd.sisc.entities.TurmaVO;
import com.ltd.sisc.exceptions.ExceptionGenerica;
import com.ltd.sisc.repositories.AlunoRepository;
import com.ltd.sisc.repositories.TurmaRepository;
import com.ltd.sisc.utils.UtilSISC;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private EnderecoServiceInterface enderecoServiceInterface;
    @Autowired
    private TurmaRepository turmaRepository;

    public void registraAluno(CadastroAlunoDTO cadastroAlunoDTO) {
        try{
            cadastroAlunoDTO.setCpf(cadastroAlunoDTO.getCpf().replaceAll("\\D",""));
            cadastroAlunoDTO.setCep(cadastroAlunoDTO.getCep().replaceAll("\\D",""));
            AlunoVO alunoVO = new AlunoVO();
            BeanUtils.copyProperties(cadastroAlunoDTO, alunoVO);
            alunoVO.setSituacao(true);
            alunoRepository.save(alunoVO);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao cadastrar candidato: ").append(e).toString());
        }
    }

    public CadastroAlunoCompletoDTO buscaAlunoPorCpf(String cpf) {
        CadastroAlunoCompletoDTO cadastroAlunoDTO = new CadastroAlunoCompletoDTO();
        if(!UtilSISC.isCPF(cpf)){
            UtilSISC.retornaErroRegraDeNegocio("CPF digitado invalido! Favor digitar um cpf valido");
        }
        try{
            AlunoVO alunoVO = alunoRepository.findFirstByCpf(cpf);
            if(alunoVO != null){
                BeanUtils.copyProperties(alunoVO, cadastroAlunoDTO);
            }
            if(alunoVO.getCep() != null ){
                EnderecoDTO endereco = enderecoServiceInterface.getEndereco(alunoVO.getCep());
                cadastroAlunoDTO.setEnderecoDTO(endereco);
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao buscar candidato por cpf: ").append(e).toString());
        }
        return cadastroAlunoDTO;
    }


    public List<CadastroAlunoCompletoDTO> buscaTodosAlunos() {
        List<CadastroAlunoCompletoDTO> listaCandidatos = new ArrayList<>();
        try{
            List<AlunoVO> listaTodosCandidatos = alunoRepository.findAll();
            populaListaTodosOsAlunos(listaCandidatos, listaTodosCandidatos);
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao buscar todos os candidatos: ").append(e).toString());
        }
        return listaCandidatos;
    }

    private  void populaListaTodosOsAlunos(List<CadastroAlunoCompletoDTO> listaCandidatos, List<AlunoVO> listaTodosCandidatos) {
        if(listaTodosCandidatos != null && !listaTodosCandidatos.isEmpty()) {
            for(AlunoVO candidatoUnico : listaTodosCandidatos){
                CadastroAlunoCompletoDTO cadastroAlunoDTO = new CadastroAlunoCompletoDTO();
                BeanUtils.copyProperties(candidatoUnico, cadastroAlunoDTO);
                if(candidatoUnico.getCep() != null ){
                    EnderecoDTO endereco = enderecoServiceInterface.getEndereco(candidatoUnico.getCep());
                    cadastroAlunoDTO.setEnderecoDTO(endereco);
                }
                listaCandidatos.add(cadastroAlunoDTO);
            }
        }
    }

    public CadastroAlunoCompletoDTO buscaAlunoPorId(Long id) {
        CadastroAlunoCompletoDTO cadastroAlunoDTO = new CadastroAlunoCompletoDTO();
        try{
            Optional<AlunoVO> alunoVO = alunoRepository.findById(id);
            if(alunoVO != null && alunoVO.isPresent()){
                BeanUtils.copyProperties(alunoVO.get(), cadastroAlunoDTO);
                if(alunoVO.get().getCep() != null){
                    EnderecoDTO endereco = enderecoServiceInterface.getEndereco(alunoVO.get().getCep());
                    cadastroAlunoDTO.setEnderecoDTO(endereco);
                }
            }
        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao buscar candidato por cpf: ").append(e).toString());
        }
        return cadastroAlunoDTO;
    }

    public void registraAlunoTurma(Long idAluno, Long idTurma) {
        try{
            Optional<AlunoVO> alunoVO = alunoRepository.findById(idAluno);
            Optional<TurmaVO> turmaVO = turmaRepository.findById(idTurma);
            if(!alunoVO.isPresent()){
                UtilSISC.retornaErroRegraDeNegocio("Aluno não encontrado na base de dados");
            }
            if(!turmaVO.isPresent()){
                UtilSISC.retornaErroRegraDeNegocio("Turma não encontrada na base de dados");
            }
            TurmaVO turmaUnica = turmaVO.get();
            AlunoVO alunoUnico = alunoVO.get();
            alunoUnico .setTurmaVO(turmaUnica);
            alunoRepository.save(alunoUnico);

        }catch (Exception e){
            throw  new ExceptionGenerica(new StringBuilder().append("Erro ao atribuir aluno a turma: ").append(e).toString());
        }
    }
}
