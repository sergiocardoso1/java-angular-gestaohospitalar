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

import com.ifba.gestaohospitalar.dto.PacienteDTO;
import com.ifba.gestaohospitalar.dto.PacienteNewDTO;
import com.ifba.gestaohospitalar.model.Paciente;
import com.ifba.gestaohospitalar.service.PacienteService;

@RestController
@RequestMapping(value = "/pacientes")
public class PacienteController {

	@Autowired
	private PacienteService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Paciente> findId(@PathVariable Long id) {
		Paciente obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value = "/nome/{nome}", method = RequestMethod.GET)
    public ResponseEntity<List<Paciente>> findByName(@PathVariable String nome) {
        List<Paciente> pessoas = service.findName(nome);
        return ResponseEntity.ok(pessoas);
    }
	
	@RequestMapping("/quantidade")
    public ResponseEntity<Long> quantidade() {
        Long obj = service.quantidadePacientes();
        return ResponseEntity.ok().body(obj);
    }

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Paciente> insert(@Valid @RequestBody PacienteNewDTO objDto) throws ParseException {
		Paciente obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Paciente> update(@Valid @RequestBody PacienteDTO objDto, @PathVariable Long id) throws ParseException{
		Paciente obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Paciente>> findAll() {
		List<Paciente> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
