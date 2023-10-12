package com.ifba.gestaohospitalar.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import com.ifba.gestaohospitalar.dto.ProcedimentoMarcarDTO;
import com.ifba.gestaohospitalar.dto.ProcedimentoMarcarNewDTO;
import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;

public interface MarcarProcedimentoService {

	public ProcedimentoMarcar findId(Long id);

	public List<ProcedimentoMarcar> findAll();

	public List<ProcedimentoMarcar> findByDate(String data) throws ParseException;

	public ProcedimentoMarcar insert(ProcedimentoMarcar obj);

	public ProcedimentoMarcar update(ProcedimentoMarcar obj);

	public void delete(Long id);

	public ProcedimentoMarcar fromDTO(ProcedimentoMarcarDTO objDto) throws ParseException;

	public ProcedimentoMarcar fromDTO(ProcedimentoMarcarNewDTO objDto) throws ParseException;

	public List<Date> listDeHorariosNoDia(String data, Long procedimentoId) throws ParseException;

}
