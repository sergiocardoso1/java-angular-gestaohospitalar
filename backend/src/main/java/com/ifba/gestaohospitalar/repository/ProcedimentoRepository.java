package com.ifba.gestaohospitalar.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;
import com.ifba.gestaohospitalar.model.Procedimento;

@Repository
public interface ProcedimentoRepository extends JpaRepository<Procedimento, Long>{
	
}
