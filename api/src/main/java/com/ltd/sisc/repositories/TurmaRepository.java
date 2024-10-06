package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.TurmaVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurmaRepository extends JpaRepository<TurmaVO,Long> {
}
