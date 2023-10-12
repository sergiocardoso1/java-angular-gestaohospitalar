package com.ifba.gestaohospitalar.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Estado;

@Repository
public interface EstadoRepository extends JpaRepository<Estado, Integer>{
	
	@Transactional
	@Query("SELECT u FROM Estado u WHERE u.nome = ?1")
    Estado findByNameContaining(String nome);

}
