package com.ifba.gestaohospitalar.service;

import java.text.ParseException;
import java.util.List;

import com.ifba.gestaohospitalar.dto.PacienteDTO;
import com.ifba.gestaohospitalar.dto.PacienteNewDTO;
import com.ifba.gestaohospitalar.model.Paciente;

public interface PacienteService {

	public Paciente findId(Long id);
	public List<Paciente> findAll();
	public List<Paciente> findName(String name);
	public long quantidadePacientes();
	public Paciente insert(Paciente obj);
	public Paciente update(Paciente obj);
	public void delete(Long id);
	public Paciente fromDTO(PacienteDTO objDto) throws ParseException;
	public Paciente fromDTO(PacienteNewDTO objDto) throws ParseException;
}
