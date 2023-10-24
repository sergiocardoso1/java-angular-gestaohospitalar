package com.ifba.gestaohospitalar.controller;

import java.net.URI;
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

import com.ifba.gestaohospitalar.dto.ProntuarioNewDTO;
import com.ifba.gestaohospitalar.model.Prontuario;
import com.ifba.gestaohospitalar.service.ProntuarioService;

@RestController
@RequestMapping(value = "/prontuarios")
public class ProntuarioController {

	@Autowired
	private ProntuarioService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Prontuario> findId(@PathVariable Long id) {
		Prontuario obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Prontuario> insert(@Valid @RequestBody ProntuarioNewDTO objDto) {
		Prontuario obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Prontuario>> findAll() {
		List<Prontuario> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}

}
