package com.ifba.gestaohospitalar.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.LaudoNewDTO;
import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.model.Laudo;
import com.ifba.gestaohospitalar.repository.ConsultaRepository;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.repository.LaudoRepository;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
import com.ifba.gestaohospitalar.service.ConsultaService;
import com.ifba.gestaohospitalar.service.LaudoService;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class LaudoServiceImpl implements LaudoService{
	
	@Autowired
	private LaudoRepository repository;
	
	@Autowired
	private ConsultaRepository consultaRepository;
	
	@Autowired
	private ConsultaService consultaService;

	
	@Autowired
	private PacienteRepository pacienteRepository;
	

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	

	@Override
	public Laudo findId(Long id) {
		Optional<Laudo> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Laudo.class.getName()));
	}

	@Override
	public List<Laudo> findAllId(Long id) {
		return repository.findAllId(id);
	}

	@Override
	public Laudo insert(Laudo obj) {
		obj.setId(null);
		pacienteRepository.save(obj.getConsulta().getPaciente());
		funcionarioRepository.save(obj.getConsulta().getMedico());
		consultaRepository.save(obj.getConsulta());
		return repository.save(obj);
		
	}

	@Override
	public Laudo fromDTO(LaudoNewDTO objDto) {
		Consulta cons = consultaService.findId(objDto.getConsultaId());
		Laudo obj = new Laudo(null, cons, objDto.getDescricao());
		return obj;
	}

}
