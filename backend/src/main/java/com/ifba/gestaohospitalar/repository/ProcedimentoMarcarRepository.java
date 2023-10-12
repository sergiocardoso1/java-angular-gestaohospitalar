package com.ifba.gestaohospitalar.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Procedimento;
import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;

@Repository
public interface ProcedimentoMarcarRepository extends JpaRepository<ProcedimentoMarcar, Long>{
	
	@Query("SELECT p FROM ProcedimentoMarcar p WHERE p.dataProcedimento = :data AND p.procedimento = :procedimento")
    List<ProcedimentoMarcar> findByDataHoraAndProce(@Param("data") Date data, @Param("procedimento") Procedimento procedimento);
	
	@Query("SELECT p FROM ProcedimentoMarcar p WHERE p.dataProcedimento = :data")
    List<ProcedimentoMarcar> findByData(@Param("data") Date data);
	
}
