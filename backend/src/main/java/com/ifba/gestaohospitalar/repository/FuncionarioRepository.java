package com.ifba.gestaohospitalar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ifba.gestaohospitalar.model.Especialidade;
import com.ifba.gestaohospitalar.model.Funcionario;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long>{

	@Transactional(readOnly = true)
	Funcionario findByEmail(String email);
	
	@Query("SELECT f FROM Funcionario f WHERE f.especialidade = :especialidade")
	List<Funcionario> findByEspecialidade(Especialidade especialidade);
	
	@Query("SELECT u FROM Funcionario u WHERE LOWER(u.nome) LIKE LOWER(CONCAT('%', :nome, '%'))")
    List<Funcionario> findByNameContaining(@Param("nome") String nome);
	
}
