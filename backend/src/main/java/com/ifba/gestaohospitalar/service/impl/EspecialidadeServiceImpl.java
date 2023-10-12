package com.ifba.gestaohospitalar.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.EspecialidadeDTO;
import com.ifba.gestaohospitalar.dto.EspecialidadeNewDTO;
import com.ifba.gestaohospitalar.model.Especialidade;
import com.ifba.gestaohospitalar.repository.EspecialidadeRepository;
import com.ifba.gestaohospitalar.service.EspecialidadeService;
import com.ifba.gestaohospitalar.service.exceptions.DataIntegrityException;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class EspecialidadeServiceImpl implements EspecialidadeService {

	@Autowired
	private EspecialidadeRepository repository;

	@Override
	public Especialidade findId(Integer id) {
		Optional<Especialidade> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Especialidade.class.getName()));
	}

	@Override
	public List<Especialidade> findAll() {
		return repository.findAll();
	}
	
	@Override
	public Especialidade insert(Especialidade obj) {
		obj.setId(null);
		return repository.save(obj);
	}



	@Override
	public Especialidade update(Especialidade obj) {
		Especialidade newObj = findId(obj.getId());
		updateData(newObj,  obj);

		return repository.save(newObj);
	}

	@Override
	public void delete(Integer id) {
		findId(id);
		try {
			repository.deleteById(id);
		} catch (DataIntegrityException e) {
			throw new DataIntegrityException("Não é possível excluir uma especialidade que possui funcionarios ativos");
		}
	}

	private void updateData(Especialidade newObj , Especialidade obj) {
		newObj.setNome(obj.getNome());
	}

	@Override
	public Especialidade fromDTO(EspecialidadeDTO objDto){
		Especialidade obj = new Especialidade(objDto.getId(), objDto.getNome());
		return obj;
	}

	@Override
	public Especialidade fromDTO(EspecialidadeNewDTO objDto){
		Especialidade obj = new Especialidade(null, objDto.getNome());
		return obj;
	}

	
}
