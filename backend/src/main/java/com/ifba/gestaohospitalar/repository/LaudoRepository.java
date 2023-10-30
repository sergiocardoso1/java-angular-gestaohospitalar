package com.ifba.gestaohospitalar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Laudo;

@Repository
public interface LaudoRepository extends JpaRepository<Laudo, Long>{
	
	@Query("SELECT l FROM Laudo l JOIN l.consulta c WHERE c.id = :id")
	Laudo findByConsulta(Long id);
	
	@Query("SELECT l FROM Laudo l JOIN l.consulta c JOIN c.paciente p WHERE p.id = :id")
	List<Laudo> findByPaciente(Long id);

}
