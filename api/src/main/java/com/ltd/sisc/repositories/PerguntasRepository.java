package com.ltd.sisc.repositories;

import com.ltd.sisc.entities.PerguntasVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerguntasRepository extends JpaRepository<PerguntasVO,Long> {
}
