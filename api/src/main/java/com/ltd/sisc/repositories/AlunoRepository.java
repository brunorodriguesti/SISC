package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.AlunoVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoRepository extends JpaRepository<AlunoVO,Long> {
    AlunoVO findFirstByCpf(String cpf);
}
