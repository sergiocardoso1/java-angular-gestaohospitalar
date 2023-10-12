package com.ifba.gestaohospitalar.service;

import com.ifba.gestaohospitalar.model.Estado;

public interface EstadoService {
	
	public Estado findByName(String name);
	
	public Estado insert(Estado obj);
}
