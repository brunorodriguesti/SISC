package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.RequisitosCursoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequisitosCursoRepository extends JpaRepository<RequisitosCursoVO,Long> {
}
