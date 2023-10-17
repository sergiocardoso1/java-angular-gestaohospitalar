package com.ifba.gestaohospitalar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Procedimento;

@Repository
public interface ProcedimentoRepository extends JpaRepository<Procedimento, Long>{
	
	@Query("SELECT COUNT(p) FROM Procedimento p")
	long qntProcedimentos();
	
}
