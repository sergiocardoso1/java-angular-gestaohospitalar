package com.ifba.gestaohospitalar.service;

import java.util.List;

import com.ifba.gestaohospitalar.dto.EspecialidadeDTO;
import com.ifba.gestaohospitalar.dto.EspecialidadeNewDTO;
import com.ifba.gestaohospitalar.model.Especialidade;

public interface EspecialidadeService {

	public Especialidade findId(Integer id);
	public List<Especialidade> findAll();
	public Especialidade insert(Especialidade obj);
	public Especialidade update(Especialidade obj);
	public void delete(Integer id);
	public Especialidade fromDTO(EspecialidadeDTO objDto);
	public Especialidade fromDTO(EspecialidadeNewDTO objDto);
}
