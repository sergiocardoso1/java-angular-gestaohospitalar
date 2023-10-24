package com.ifba.gestaohospitalar.service;

import java.util.List;

import com.ifba.gestaohospitalar.dto.ProntuarioNewDTO;
import com.ifba.gestaohospitalar.model.Prontuario;

public interface ProntuarioService {

	public Prontuario findId(Long id);
	public List<Prontuario> findAll();
	public Prontuario insert(Prontuario obj);
	public Prontuario fromDTO(ProntuarioNewDTO objDto);
}
