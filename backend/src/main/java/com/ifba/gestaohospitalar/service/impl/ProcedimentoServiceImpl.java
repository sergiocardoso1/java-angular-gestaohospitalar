package com.ifba.gestaohospitalar.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.ProcedimentoDTO;
import com.ifba.gestaohospitalar.dto.ProcedimentoNewDTO;
import com.ifba.gestaohospitalar.model.Procedimento;
import com.ifba.gestaohospitalar.repository.ProcedimentoRepository;
import com.ifba.gestaohospitalar.service.ProcedimentoService;
import com.ifba.gestaohospitalar.service.exceptions.DataIntegrityException;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class ProcedimentoServiceImpl implements ProcedimentoService {

	@Autowired
	private ProcedimentoRepository repository;

	@Override
	public Procedimento findId(Long id) {
		Optional<Procedimento> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Procedimento.class.getName()));
	}

	@Override
	public List<Procedimento> findAll() {
		return repository.findAll();
	}
	
	public long quantidadeProcedimento() {
		return repository.qntProcedimentos();
	}

	@Override
	public Procedimento insert(Procedimento obj) {
		obj.setId(null);
		return repository.save(obj);
	}

	@Override
	public Procedimento update(Procedimento obj) {
		Procedimento newObj = findId(obj.getId());
		updateData(newObj, obj);

		return repository.save(newObj);
	}

	@Override
	public void delete(Long id) {
		findId(id);
		try {
			repository.deleteById(id);
		} catch (DataIntegrityException e) {
			throw new DataIntegrityException("Não é possível excluir uma especialidade que possui funcionarios ativos");
		}
	}

	private void updateData(Procedimento newObj, Procedimento obj) {
		newObj.setNome(obj.getNome());
	}

	@Override
	public Procedimento fromDTO(ProcedimentoDTO objDto) {
		Procedimento obj = new Procedimento(objDto.getId(), objDto.getNome());
		return obj;
	}

	@Override
	public Procedimento fromDTO(ProcedimentoNewDTO objDto) {
		Procedimento obj = new Procedimento(null, objDto.getNome());
		return obj;
	}

}
