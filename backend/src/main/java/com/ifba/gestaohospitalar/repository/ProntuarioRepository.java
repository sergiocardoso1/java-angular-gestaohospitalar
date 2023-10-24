package com.ifba.gestaohospitalar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Prontuario;

@Repository
public interface ProntuarioRepository extends JpaRepository<Prontuario, Long>{

	
}
