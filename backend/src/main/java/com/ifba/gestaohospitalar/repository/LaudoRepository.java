package com.ifba.gestaohospitalar.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifba.gestaohospitalar.model.Laudo;

@Repository
public interface LaudoRepository extends JpaRepository<Laudo, Long>{
	
	@Transactional
	@Query("SELECT u FROM Laudo u WHERE u.id = :id")
    List<Laudo> findAllId(Long id);
}
