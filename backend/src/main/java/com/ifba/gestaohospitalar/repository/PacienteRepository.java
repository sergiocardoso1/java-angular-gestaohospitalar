package com.ifba.gestaohospitalar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ifba.gestaohospitalar.model.Paciente;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long>{

	@Transactional(readOnly = true)
	Paciente findByEmail(String email);
	
	@Query("SELECT u FROM Paciente u WHERE LOWER(u.nome) LIKE LOWER(CONCAT('%', :nome, '%'))")
    List<Paciente> findByNameContaining(@Param("nome") String nome);
}
