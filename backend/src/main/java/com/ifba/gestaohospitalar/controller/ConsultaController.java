package com.ifba.gestaohospitalar.controller;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ifba.gestaohospitalar.dto.ConsultaDTO;
import com.ifba.gestaohospitalar.dto.ConsultaNewDTO;
import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.service.ConsultaService;

@RestController
@RequestMapping(value = "/consultas")
public class ConsultaController {
	
	private SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");

	@Autowired
	private ConsultaService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Consulta> findId(@PathVariable Long id) {
		Consulta obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value = "/data/{data}/medico/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<String>> listDeHorariosNoDia(@PathVariable String data, @PathVariable Long id) throws ParseException, UnsupportedEncodingException {
		List<Date> obj = service.listDeHorariosNoDia(data, id);
		List<String> objFormatado = new ArrayList<>();
		for(Date x : obj) {
			objFormatado.add(sdf.format(x));
		}
		System.out.println(objFormatado);
		return ResponseEntity.ok().body(objFormatado);
		
	}
	
	@RequestMapping("/hoje")
    public ResponseEntity<Long> quantidadeHoje() {
        Long obj = service.quantidadeConsultasHoje();
        return ResponseEntity.ok().body(obj);
    }
	
	@RequestMapping(value = "/data/{data}", method = RequestMethod.GET)
	public ResponseEntity<List<Consulta>> findByDate(@PathVariable String data) throws ParseException, UnsupportedEncodingException {
		List<Consulta> obj = service.findByDate(data);
		
		return ResponseEntity.ok().body(obj);
		
	}
	
	@RequestMapping(value = "paciente/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Consulta>> findByPaciente(@PathVariable Long id) {
		List<Consulta> obj = service.findByPaciente(id);
		return ResponseEntity.ok().body(obj);
	}
	
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Consulta> insert(@Valid @RequestBody ConsultaNewDTO objDto) throws ParseException {
		Consulta obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Consulta> update(@Valid @RequestBody ConsultaDTO objDto, @PathVariable Long id) throws ParseException{
		Consulta obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Consulta>> findAll() {
		List<Consulta> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value = "/consultasdomes", method = RequestMethod.GET)
	public ResponseEntity<List<String>> listEspecialidadesMaisFeitasNosUltimos30Dias() {
        List<String> especialidades = service.findEspecialidadesMaisFeitasNosUltimos30Dias();
        return ResponseEntity.ok().body(especialidades);
    }

}
