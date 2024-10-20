package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.ParametroVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParametroRepository extends JpaRepository<ParametroVO,Long> {
    List<ParametroVO> findBySituacao(boolean situacao);
}
