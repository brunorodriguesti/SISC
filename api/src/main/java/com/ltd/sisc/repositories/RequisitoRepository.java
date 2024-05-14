package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.RequisitoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequisitoRepository extends JpaRepository<RequisitoVO,Long> {
}
