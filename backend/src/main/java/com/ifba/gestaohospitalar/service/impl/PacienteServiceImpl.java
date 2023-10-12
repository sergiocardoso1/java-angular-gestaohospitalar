package com.ifba.gestaohospitalar.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.PacienteDTO;
import com.ifba.gestaohospitalar.dto.PacienteNewDTO;
import com.ifba.gestaohospitalar.model.Cidade;
import com.ifba.gestaohospitalar.model.Endereco;
import com.ifba.gestaohospitalar.model.Estado;
import com.ifba.gestaohospitalar.model.Paciente;
import com.ifba.gestaohospitalar.repository.CidadeRepository;
import com.ifba.gestaohospitalar.repository.EnderecoRepository;
import com.ifba.gestaohospitalar.repository.EstadoRepository;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
import com.ifba.gestaohospitalar.service.CidadeService;
import com.ifba.gestaohospitalar.service.EstadoService;
import com.ifba.gestaohospitalar.service.PacienteService;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class PacienteServiceImpl implements PacienteService {

	@Autowired
	private PacienteRepository repository;

	@Autowired
	private CidadeService cidadeService;

	@Autowired
	private CidadeRepository cidadeRepository;

	@Autowired
	private EstadoService estadoService;

	@Autowired
	private EstadoRepository estadoRepository;

	@Autowired
	private EnderecoRepository enderecoRepository;

	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	private DateFormat formatoEntrada = new SimpleDateFormat("yyyy/MM/dd");

	private DateFormat formatoSaida = new SimpleDateFormat("dd/MM/yyyy");

	@Override
	public Paciente findId(Long id) {
		Optional<Paciente> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Paciente.class.getName()));
	}

	@Override
	public List<Paciente> findAll() {
		return repository.findAll();
	}
	
	public List<Paciente> findName(String name) {
		return repository.findByNameContaining(name.toLowerCase());
	}

	@Override
	public Paciente insert(Paciente obj) {
		obj.setId(null);
		estadoRepository.save(obj.getEndereco().getCidade().getEstado());
		cidadeRepository.save(obj.getEndereco().getCidade());
		enderecoRepository.save(obj.getEndereco());
		return repository.save(obj);
	}

	@Override
	public Paciente update(Paciente obj) {
		Paciente newObj = findId(obj.getId());
		Endereco newEnd = newObj.getEndereco();
		updateData(newObj, newEnd, obj);
		enderecoRepository.save(newObj.getEndereco());
		cidadeRepository.save(newObj.getEndereco().getCidade());
		estadoRepository.save(newObj.getEndereco().getCidade().getEstado());
		return repository.save(newObj);
	}

	@Override
	public void delete(Long id) {
		findId(id);
		repository.deleteById(id);
	}

	private void updateData(Paciente newObj, Endereco newEnd, Paciente obj) {
		newObj.setNome(obj.getNome());
		newObj.setEmail(obj.getEmail());
		newObj.setConvenio(obj.getConvenio());
		newObj.setDataDeNascimento(obj.getDataDeNascimento());
		newObj.setTelefone(obj.getTelefone());
		newObj.setEmail(obj.getEmail());
		newEnd.setLogradouro(obj.getEndereco().getLogradouro());
		newEnd.setBairro(obj.getEndereco().getBairro());
		newEnd.setCep(obj.getEndereco().getCep());
		newEnd.setComplemento(obj.getEndereco().getComplemento());
		newEnd.setNumero(obj.getEndereco().getNumero());
		newEnd.setCidade(obj.getEndereco().getCidade());
		newObj.setEndereco(newEnd);
	}

	@Override
	public Paciente fromDTO(PacienteDTO objDto) throws ParseException {
		Cidade cid = new Cidade();
		Estado estado = new Estado();

		if (cidadeService.findByName(objDto.getCidade()) != null) {
			cid = (cidadeService.findByName(objDto.getCidade()));

		} else if (estadoService.findByName(objDto.getEstado()) != null) {
			cid.setNome(objDto.getCidade());
			estado = (estadoService.findByName(objDto.getEstado()));
			cid.setEstado(estado);

		}

		else {
			cid.setNome(objDto.getCidade());
			cid.setEstado(new Estado(null, objDto.getEstado()));
		}
		
		
		Date data = formatoEntrada.parse(objDto.getDataDeNascimento());
        String dataFormatada = formatoSaida.format(data);
		Endereco end = new Endereco(null, objDto.getLogradouro(), objDto.getNumero(), objDto.getCep(),
				objDto.getBairro(), objDto.getComplemento(), cid);
		Paciente obj = new Paciente(objDto.getId(), objDto.getNome(), objDto.getEmail(), sdf.parse(dataFormatada),
				objDto.getConvenio(), objDto.getTelefone(), null, null, end);
		return obj;
	}

	@Override
	public Paciente fromDTO(PacienteNewDTO objDto) throws ParseException {
		Cidade cid = new Cidade();
		Estado estado = new Estado();

		if (cidadeService.findByName(objDto.getCidade()) != null) {
			cid = (cidadeService.findByName(objDto.getCidade()));

		} else if (estadoService.findByName(objDto.getEstado()) != null) {
			cid.setNome(objDto.getCidade());
			estado = (estadoService.findByName(objDto.getEstado()));
			cid.setEstado(estado);

		}

		else {
			cid.setNome(objDto.getCidade());
			cid.setEstado(new Estado(null, objDto.getEstado()));
		}

		Date data = formatoEntrada.parse(objDto.getDataDeNascimento());
        String dataFormatada = formatoSaida.format(data);
		Endereco end = new Endereco(null, objDto.getLogradouro(), objDto.getNumero(), objDto.getCep(),
				objDto.getBairro(), objDto.getComplemento(), cid);
		Paciente obj = new Paciente(null, objDto.getNome(), objDto.getEmail(), sdf.parse(dataFormatada),
				objDto.getConvenio(), objDto.getTelefone(), objDto.getCpf(), new Date() ,end);
		return obj;
	}

}
