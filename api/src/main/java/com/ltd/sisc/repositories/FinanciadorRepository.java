package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.FinanciadorVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinanciadorRepository extends JpaRepository<FinanciadorVO,Long> {
}
