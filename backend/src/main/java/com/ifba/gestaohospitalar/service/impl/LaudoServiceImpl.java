package com.ifba.gestaohospitalar.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.LaudoNewDTO;
import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.model.Laudo;
import com.ifba.gestaohospitalar.repository.LaudoRepository;
import com.ifba.gestaohospitalar.service.ConsultaService;
import com.ifba.gestaohospitalar.service.LaudoService;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class LaudoServiceImpl implements LaudoService{
	
	@Autowired
	private LaudoRepository repository;
	
	@Autowired
	private ConsultaService consultaService;
	

	@Override
	public Laudo findId(Long id) {
		Optional<Laudo> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Laudo.class.getName()));
	}

	@Override
	public Laudo findByConsulta(Long id) {
		return repository.findByConsulta(id);
	}

	@Override
	public List<Laudo> findByPaciente(Long id) {
		return repository.findByPaciente(id);
	}

	@Override
	public Laudo insert(Laudo obj) {
		obj.setId(null);
		return repository.save(obj);
		
	}

	@Override
	public Laudo fromDTO(LaudoNewDTO objDto) {
		Consulta cons = consultaService.findId(objDto.getConsultaId());
		Laudo obj = new Laudo(null, cons, objDto.getDescricao());
		return obj;
	}


}
