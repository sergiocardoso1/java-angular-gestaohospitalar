package com.ifba.gestaohospitalar.service;

import java.util.List;

import com.ifba.gestaohospitalar.dto.ProcedimentoDTO;
import com.ifba.gestaohospitalar.dto.ProcedimentoNewDTO;
import com.ifba.gestaohospitalar.model.Procedimento;

public interface ProcedimentoService {

	public Procedimento findId(Long id);
	public List<Procedimento> findAll();
	public Procedimento insert(Procedimento obj);
	public Procedimento update(Procedimento obj);
	public void delete(Long id);
	public Procedimento fromDTO(ProcedimentoDTO objDto);
	public Procedimento fromDTO(ProcedimentoNewDTO objDto);
}
