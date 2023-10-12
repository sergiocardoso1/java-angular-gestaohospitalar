package com.ifba.gestaohospitalar.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import com.ifba.gestaohospitalar.dto.ConsultaDTO;
import com.ifba.gestaohospitalar.dto.ConsultaNewDTO;
import com.ifba.gestaohospitalar.model.Consulta;

public interface ConsultaService {

	public Consulta findId(Long id);
	public List<Consulta> findAll();
	public List<Consulta> findByDate(String data) throws ParseException;
	public Consulta insert(Consulta obj);
	public Consulta update(Consulta obj);
	public void delete(Long id);
	public Consulta fromDTO(ConsultaDTO objDto)throws ParseException;
	public Consulta fromDTO(ConsultaNewDTO objDto)throws ParseException;
	public List<Date> listDeHorariosNoDia(String data, Long medicoId) throws ParseException;
}
