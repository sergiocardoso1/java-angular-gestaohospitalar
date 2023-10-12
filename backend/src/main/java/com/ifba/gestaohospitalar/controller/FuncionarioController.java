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

import com.ifba.gestaohospitalar.dto.FuncionarioDTO;
import com.ifba.gestaohospitalar.dto.FuncionarioNewDTO;
import com.ifba.gestaohospitalar.model.Funcionario;
import com.ifba.gestaohospitalar.service.FuncionarioService;

@RestController
@RequestMapping(value = "/funcionarios")
public class FuncionarioController {

	@Autowired
	private FuncionarioService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Funcionario> findId(@PathVariable Long id) {
		Funcionario obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping("/nome/{nome}")
    public ResponseEntity<List<Funcionario>> findByName(@PathVariable String nome) {
        List<Funcionario> funcionarios = service.findName(nome);
        return ResponseEntity.ok(funcionarios);
    }
	
	@RequestMapping("/especialidade/{id}")
    public ResponseEntity<List<Funcionario>> findByEspecialidade(@PathVariable Integer id) {
        List<Funcionario> funcionarios = service.findByEspecialidade(id);
        return ResponseEntity.ok(funcionarios);
    }

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Funcionario> insert(@Valid @RequestBody FuncionarioNewDTO objDto) throws ParseException {
		Funcionario obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Funcionario> update(@Valid @RequestBody FuncionarioDTO objDto, @PathVariable Long id) throws ParseException{
		Funcionario obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Funcionario>> findAll() {
		List<Funcionario> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
