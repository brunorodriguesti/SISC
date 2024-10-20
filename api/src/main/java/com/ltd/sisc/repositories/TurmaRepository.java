package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.TurmaVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TurmaRepository extends JpaRepository<TurmaVO,Long> {
    List<TurmaVO> findBySituacao(boolean situacao);
}
