package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.ObjetivoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ObjetivoRepository extends JpaRepository<ObjetivoVO,Long> {
    List<ObjetivoVO> findBySituacao(boolean situacao);
}
