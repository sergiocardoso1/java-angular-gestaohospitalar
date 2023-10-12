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

import com.ifba.gestaohospitalar.dto.ProcedimentoMarcarDTO;
import com.ifba.gestaohospitalar.dto.ProcedimentoMarcarNewDTO;
import com.ifba.gestaohospitalar.model.Procedimento;
import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;
import com.ifba.gestaohospitalar.repository.ConsultaRepository;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
import com.ifba.gestaohospitalar.repository.ProcedimentoMarcarRepository;
import com.ifba.gestaohospitalar.repository.ProcedimentoRepository;
import com.ifba.gestaohospitalar.service.MarcarProcedimentoService;
import com.ifba.gestaohospitalar.service.PacienteService;
import com.ifba.gestaohospitalar.service.ProcedimentoService;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class MarcarProcedimentoServiceImpl implements MarcarProcedimentoService{

	@Autowired
	private ProcedimentoMarcarRepository repository;
	
	@Autowired
	private PacienteService pacienteService;
	
	@Autowired
	private PacienteRepository pacienteRepository;
	
	@Autowired
	private ProcedimentoRepository procedimentoRepository;
	
	@Autowired
	private ProcedimentoService procedimentoService;
	
	@Autowired
	private ConsultaRepository consultaRepository;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	private DateFormat formatoEntrada = new SimpleDateFormat("yyyy/MM/dd");

	private DateFormat formatoSaida = new SimpleDateFormat("dd/MM/yyyy");
	
	private SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm");


	@Override
	public ProcedimentoMarcar findId(Long id) {
		Optional<ProcedimentoMarcar> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + ProcedimentoMarcar.class.getName()));
	}

	@Override
	public List<ProcedimentoMarcar> findAll() {
		return repository.findAll();
	}
	
	@Override
	public List<ProcedimentoMarcar> findByDate(String data) throws ParseException{
		Date data2 = formatoEntrada.parse(data.replace("-", "/"));
		String dataFormatada = formatoSaida.format(data2);
		System.out.println(sdf.parse(dataFormatada));
		return repository.findByData(sdf.parse(dataFormatada));
	}

	@Override
	public ProcedimentoMarcar insert(ProcedimentoMarcar obj) {
		obj.setId(null);
		return repository.save(obj);
	}

	@Override
	public ProcedimentoMarcar update(ProcedimentoMarcar obj) {
		ProcedimentoMarcar newObj = findId(obj.getId());
		updateData(newObj, obj);
		return repository.save(newObj);
	}
	
	private void updateData(ProcedimentoMarcar newObj, ProcedimentoMarcar obj) {
		newObj.setDataProcedimento(obj.getDataProcedimento());
		newObj.setValor(obj.getValor());
	}
	
	@Override
	public void delete(Long id) {
		findId(id);
		repository.deleteById(id);
	}

	@Override
	public ProcedimentoMarcar fromDTO(ProcedimentoMarcarDTO objDto) throws ParseException {
		Date data = formatoEntrada.parse(objDto.getDataProcedimento());
		String dataFormatada = formatoSaida.format(data);
		ProcedimentoMarcar obj = new ProcedimentoMarcar(objDto.getId(),null, sdf.parse(dataFormatada), null, null,objDto.getValor());
		return obj;
		
	}

	@Override
	public ProcedimentoMarcar fromDTO(ProcedimentoMarcarNewDTO objDto)throws ParseException {
		Date data = formatoEntrada.parse(objDto.getDataProcedimento());
		String dataFormatada = formatoSaida.format(data);
		ProcedimentoMarcar obj = new ProcedimentoMarcar(null, procedimentoService.findId(objDto.getProcedimentoId()),sdf.parse(dataFormatada), sdf2.parse(objDto.getHorarioProcedimento()), pacienteService.findId(objDto.getPacienteId()),objDto.getValor());
		return obj;
	}
	
	@Override
	public List<Date> listDeHorariosNoDia(String data, Long procedimentoId) throws ParseException{
		List<Date> horas = new ArrayList<>();
		Date data2 = formatoEntrada.parse(data.replace("-", "/"));
		String dataFormatada = formatoSaida.format(data2);
		System.out.println(sdf.parse(dataFormatada));
		for(ProcedimentoMarcar x : repository.findByDataHoraAndProce(sdf.parse(dataFormatada), procedimentoService.findId(procedimentoId))){
			horas.add(x.getHorarioProcedimento());
		}
		return horas;
	}
}
