package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.CursoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CursoRepository extends JpaRepository<CursoVO,Long> {
    //@Query("SELECT c FROM CursoVO c WHERE c.nome LIKE %:nome%")
    @Query("SELECT c FROM CursoVO c WHERE LOWER(c.nome) LIKE LOWER(CONCAT('%', :nome, '%'))")
    List<CursoVO> buscaCursosPorNome(@Param("nome") String nome);
}
