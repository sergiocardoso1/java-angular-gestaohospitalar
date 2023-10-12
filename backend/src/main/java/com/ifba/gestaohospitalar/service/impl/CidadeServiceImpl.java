package com.ifba.gestaohospitalar.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.model.Cidade;
import com.ifba.gestaohospitalar.repository.CidadeRepository;
import com.ifba.gestaohospitalar.service.CidadeService;

@Service
public class CidadeServiceImpl implements CidadeService{
	
	@Autowired
	private CidadeRepository repository;

	@Override
	@Transactional
	public Cidade findByName(String name) {
		return repository.findByNameContaining(name);
	}

	@Override
	public Cidade insert(Cidade obj) {
		obj.setId(null);
		return repository.save(obj);
	}
	
	
}
