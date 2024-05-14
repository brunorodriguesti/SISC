package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.OpcoesVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpcoesRepository extends JpaRepository<OpcoesVO,Long> {
}
