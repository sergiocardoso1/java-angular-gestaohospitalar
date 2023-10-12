package com.ifba.gestaohospitalar.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Cidade;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, Integer>{
	
	@Transactional
	@Query("SELECT u FROM Cidade u WHERE u.nome = ?1")
    Cidade findByNameContaining(String nome);
}
