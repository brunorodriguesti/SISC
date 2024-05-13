package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.CursoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends JpaRepository<CursoVO,Long> {
}
