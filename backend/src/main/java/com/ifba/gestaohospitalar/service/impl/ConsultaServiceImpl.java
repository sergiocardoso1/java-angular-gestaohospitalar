package com.ifba.gestaohospitalar.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.ConsultaDTO;
import com.ifba.gestaohospitalar.dto.ConsultaNewDTO;
import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.repository.ConsultaRepository;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
import com.ifba.gestaohospitalar.repository.ProcedimentoMarcarRepository;
import com.ifba.gestaohospitalar.service.ConsultaService;
import com.ifba.gestaohospitalar.service.FuncionarioService;
import com.ifba.gestaohospitalar.service.PacienteService;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;


@Service
public class ConsultaServiceImpl implements ConsultaService{
	
	@Autowired
	private ConsultaRepository repository;
	
	@Autowired
	private PacienteService pacienteService;
	
	@Autowired
	private PacienteRepository pacienteRepository;
	
	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	@Autowired
	private ProcedimentoMarcarRepository procedimentoMarcarRepository;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	private DateFormat formatoEntrada = new SimpleDateFormat("yyyy/MM/dd");

	private DateFormat formatoSaida = new SimpleDateFormat("dd/MM/yyyy");
	
	private SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm");


	@Override
	public Consulta findId(Long id) {
		Optional<Consulta> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Consulta.class.getName()));
	}

	@Override
	public List<Consulta> findAll() {
		return repository.findAll();
	}
	
	@Override
	public List<Consulta> findByDate(String data) throws ParseException{
		Date data2 = formatoEntrada.parse(data.replace("-", "/"));
		String dataFormatada = formatoSaida.format(data2);
		System.out.println(sdf.parse(dataFormatada));
		return repository.findByDate(sdf.parse(dataFormatada));
	}

	@Override
	public Consulta insert(Consulta obj) {
		obj.setId(null);
		funcionarioRepository.save(obj.getMedico());
		pacienteRepository.save(obj.getPaciente());
		procedimentoMarcarRepository.saveAll(obj.getPaciente().getProcedimentoMarcar());
		return repository.save(obj);
	}

	@Override
	public Consulta update(Consulta obj) {
		Consulta newObj = findId(obj.getId());
		updateData(newObj, obj);
		return repository.save(newObj);
	}
	
	private void updateData(Consulta newObj, Consulta obj) {
		newObj.setDataConsulta(obj.getDataConsulta());
		newObj.setValor(obj.getValor());
	}
	
	@Override
	public void delete(Long id) {
		findId(id);
		repository.deleteById(id);
	}

	@Override
	public Consulta fromDTO(ConsultaDTO objDto) throws ParseException {
		Date data = formatoEntrada.parse(objDto.getDataConsulta());
		String dataFormatada = formatoSaida.format(data);
		Consulta obj = new Consulta(objDto.getId(), null, sdf.parse(dataFormatada), null, null,objDto.getValor());
		return obj;
		
	}

	@Override
	public Consulta fromDTO(ConsultaNewDTO objDto)throws ParseException {
		Date data = formatoEntrada.parse(objDto.getDataConsulta());
		String dataFormatada = formatoSaida.format(data);
		Consulta obj = new Consulta(null, funcionarioService.findId(objDto.getMedicoId()),sdf.parse(dataFormatada), sdf2.parse(objDto.getHorarioConsulta()), pacienteService.findId(objDto.getPacienteId()),objDto.getValor());
		return obj;
	}
	
	@Override
	public List<Date> listDeHorariosNoDia(String data, Long medicoId) throws ParseException{
		List<Date> horas = new ArrayList<>();
		Date data2 = formatoEntrada.parse(data.replace("-", "/"));
		String dataFormatada = formatoSaida.format(data2);
		System.out.println(sdf.parse(dataFormatada));
		for(Consulta x : repository.findByMedicoAndDataHora(sdf.parse(dataFormatada), funcionarioService.findId(medicoId))){
			horas.add(x.getHorarioConsulta());
		}
		return horas;
	}


}
