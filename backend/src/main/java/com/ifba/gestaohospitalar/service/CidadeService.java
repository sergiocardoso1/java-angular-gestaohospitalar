package com.ifba.gestaohospitalar.service;

import com.ifba.gestaohospitalar.model.Cidade;

public interface CidadeService {
	
	public Cidade findByName(String name);
	
	public Cidade insert(Cidade obj);
}
