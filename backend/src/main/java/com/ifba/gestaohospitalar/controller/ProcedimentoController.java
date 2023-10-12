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

import com.ifba.gestaohospitalar.dto.ProcedimentoNewDTO;
import com.ifba.gestaohospitalar.model.Procedimento;
import com.ifba.gestaohospitalar.service.ProcedimentoService;

@RestController
@RequestMapping(value = "/procedimentos")
public class ProcedimentoController {

	@Autowired
	private ProcedimentoService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Procedimento> findId(@PathVariable Long id) {
		Procedimento obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Procedimento> insert(@Valid @RequestBody ProcedimentoNewDTO objDto) {
		Procedimento obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Procedimento>> findAll() {
		List<Procedimento> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
