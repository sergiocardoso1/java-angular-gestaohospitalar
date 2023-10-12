package com.ifba.gestaohospitalar.service;

import java.util.List;

import com.ifba.gestaohospitalar.dto.LaudoNewDTO;
import com.ifba.gestaohospitalar.model.Laudo;

public interface LaudoService {

	public Laudo findId(Long id);
	public List<Laudo> findAllId(Long id);
	public Laudo insert(Laudo obj);
	public Laudo fromDTO(LaudoNewDTO objDto);
}
