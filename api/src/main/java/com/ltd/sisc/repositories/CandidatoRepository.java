package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.CandidatoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatoRepository extends JpaRepository<CandidatoVO,Long> {
    CandidatoVO findFirstByCpf(String cpf);
}
