package com.ifba.gestaohospitalar.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.ProntuarioNewDTO;
import com.ifba.gestaohospitalar.model.Paciente;
import com.ifba.gestaohospitalar.model.Prontuario;
import com.ifba.gestaohospitalar.repository.ProntuarioRepository;
import com.ifba.gestaohospitalar.service.PacienteService;
import com.ifba.gestaohospitalar.service.ProntuarioService;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class ProntuarioServiceImpl implements ProntuarioService {

	@Autowired
	private ProntuarioRepository repository;

	@Autowired
	private PacienteService pacienteService;


	@Override
	public Prontuario findId(Long id) {
		Optional<Prontuario> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Prontuario.class.getName()));
	}

	@Override
	public List<Prontuario> findAll() {
		return repository.findAll();
	}

	@Override
	public Prontuario insert(Prontuario obj) {
		obj.setId(null);
		return repository.save(obj);
	}

	@Override
	public Prontuario fromDTO(ProntuarioNewDTO objDto) {
		Paciente pac = pacienteService.findId(objDto.getPacienteId());
		Prontuario prontuario = new Prontuario(null, new Date(), pac);
		pac.setProntuario(prontuario);

		return prontuario;
	}

}
