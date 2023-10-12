package com.ifba.gestaohospitalar.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.model.Estado;
import com.ifba.gestaohospitalar.repository.EstadoRepository;
import com.ifba.gestaohospitalar.service.EstadoService;

@Service
public class EstadoServiceImpl implements EstadoService{
	
	@Autowired
	private EstadoRepository repository;

	@Transactional
	public Estado findByName(String name) {
		return repository.findByNameContaining(name);
	}

	public Estado insert(Estado obj) {
		obj.setId(null);
		return repository.save(obj);
	}
	
	
}
