package com.ifba.gestaohospitalar.controller;

import java.net.URI;
import java.text.ParseException;
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

import com.ifba.gestaohospitalar.dto.LaudoNewDTO;
import com.ifba.gestaohospitalar.model.Laudo;
import com.ifba.gestaohospitalar.service.LaudoService;

@RestController
@RequestMapping(value = "/laudos")
public class LaudoController {

	@Autowired
	private LaudoService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Laudo> findId(@PathVariable Long id) {
		Laudo obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value = "/consulta/{id}", method = RequestMethod.GET)
	public ResponseEntity<Laudo> findByConsulta(@PathVariable Long id) {
		Laudo obj = service.findByConsulta(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value = "/paciente/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Laudo>> findByPaciente(@PathVariable Long id) {
		List<Laudo> obj = service.findByPaciente(id);
		return ResponseEntity.ok().body(obj);
	}
	
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Laudo> insert(@Valid @RequestBody LaudoNewDTO objDto) throws ParseException {
		Laudo obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}


}
