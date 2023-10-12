package com.ifba.gestaohospitalar.service.validations;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.ifba.gestaohospitalar.dto.PacienteNewDTO;
import com.ifba.gestaohospitalar.exceptions.FieldMessage;
import com.ifba.gestaohospitalar.model.Paciente;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
import com.ifba.gestaohospitalar.service.validations.br.BR;

public class PacienteInsertValidator implements ConstraintValidator<PacienteInsert, PacienteNewDTO> {
	
	@Autowired
	private PacienteRepository repository;
	
	@Override
	public void initialize(PacienteInsert ann) {
	}

	@Override
	public boolean isValid(PacienteNewDTO objDto, ConstraintValidatorContext context) {
		List<FieldMessage> list = new ArrayList<>();
		if(!BR.isValidCPF(objDto.getCpf())) {
			list.add(new FieldMessage("cpf", "CPF inválido"));
		}
		
		Paciente aux = repository.findByEmail(objDto.getEmail());
		if (aux != null) {
			list.add(new FieldMessage("email","Email já existente"));
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
	}
