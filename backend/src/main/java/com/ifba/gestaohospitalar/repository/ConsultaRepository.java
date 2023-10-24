package com.ifba.gestaohospitalar.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.model.Funcionario;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long>{
	
	@Query("SELECT c FROM Consulta c WHERE c.medico = :medico AND c.dataConsulta = :data")
	List<Consulta> findByMedicoAndDataHora(Date data, Funcionario medico);
	
	@Query("SELECT c FROM Consulta c WHERE c.dataConsulta = :data")
	List<Consulta> findByDate(Date data);
	
	@Query("SELECT c FROM Consulta c JOIN c.paciente p WHERE p.id = :id")
	List<Consulta> findByPaciente(Long id);
	
	@Query("SELECT COUNT(c) FROM Consulta c WHERE c.dataConsulta = :data")
	long qntConsultasHoje(Date data);
	
}
