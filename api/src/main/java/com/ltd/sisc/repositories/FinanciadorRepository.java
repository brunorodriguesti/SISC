package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.FinanciadorVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FinanciadorRepository extends JpaRepository<FinanciadorVO,Long> {
    @Query("SELECT f FROM FinanciadorVO f WHERE f.nome LIKE %:nome%")
    List<FinanciadorVO> buscaListaFinanciadores(@Param("nome") String nome);
}
