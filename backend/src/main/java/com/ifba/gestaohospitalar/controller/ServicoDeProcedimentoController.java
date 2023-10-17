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

import com.ifba.gestaohospitalar.dto.ProcedimentoMarcarDTO;
import com.ifba.gestaohospitalar.dto.ProcedimentoMarcarNewDTO;
import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;
import com.ifba.gestaohospitalar.service.MarcarProcedimentoService;

@RestController
@RequestMapping(value = "/servicodeprocedimento")
public class ServicoDeProcedimentoController {
	
	private SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");

	@Autowired
	private MarcarProcedimentoService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<ProcedimentoMarcar> findId(@PathVariable Long id) {
		ProcedimentoMarcar obj = service.findId(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping("/hoje")
    public ResponseEntity<Long> quantidadeHoje() {
        Long obj = service.quantidadeProcedimentosHoje();
        return ResponseEntity.ok().body(obj);
    }
	
	@RequestMapping(value = "/data/{data}/procedimento/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<String>> listDeHorariosNoDia(@PathVariable String data, @PathVariable Long id) throws ParseException, UnsupportedEncodingException {
		List<Date> obj = service.listDeHorariosNoDia(data, id);
		List<String> objFormatado = new ArrayList<>();
		for(Date x : obj) {
			objFormatado.add(sdf.format(x));
		}
		System.out.println(objFormatado);
		return ResponseEntity.ok().body(objFormatado);
		
	}
	
	@RequestMapping(value = "/data/{data}", method = RequestMethod.GET)
	public ResponseEntity<List<ProcedimentoMarcar>> findByDate(@PathVariable String data) throws ParseException, UnsupportedEncodingException {
		List<ProcedimentoMarcar> obj = service.findByDate(data);
		
		return ResponseEntity.ok().body(obj);
		
	}
	
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<ProcedimentoMarcar> insert(@Valid @RequestBody ProcedimentoMarcarNewDTO objDto) throws ParseException {
		ProcedimentoMarcar obj = service.fromDTO(objDto);
		obj.setId(null);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<ProcedimentoMarcar> update(@Valid @RequestBody ProcedimentoMarcarDTO objDto, @PathVariable Long id) throws ParseException{
		ProcedimentoMarcar obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<ProcedimentoMarcar>> findAll() {
		List<ProcedimentoMarcar> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
