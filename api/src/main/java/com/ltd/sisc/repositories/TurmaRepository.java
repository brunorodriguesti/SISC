package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.TurmaVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TurmaRepository extends JpaRepository<TurmaVO,Long> {
    List<TurmaVO> findBySituacao(boolean situacao);

    @Query("SELECT turma FROM TurmaVO turma WHERE turma.cursoVO.idCurso = :idCurso  ORDER BY turma.dataFim DESC ")
    List<TurmaVO> buscaTurmaPorIdCurso(@Param("idCurso") Long idCurso);
}
