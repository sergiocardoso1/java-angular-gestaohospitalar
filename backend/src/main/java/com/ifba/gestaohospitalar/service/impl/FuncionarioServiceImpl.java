package com.ifba.gestaohospitalar.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.dto.FuncionarioDTO;
import com.ifba.gestaohospitalar.dto.FuncionarioNewDTO;
import com.ifba.gestaohospitalar.dto.FuncionarioPasswordDTO;
import com.ifba.gestaohospitalar.enums.Perfil;
import com.ifba.gestaohospitalar.model.Cidade;
import com.ifba.gestaohospitalar.model.Endereco;
import com.ifba.gestaohospitalar.model.Estado;
import com.ifba.gestaohospitalar.model.Funcionario;
import com.ifba.gestaohospitalar.repository.CidadeRepository;
import com.ifba.gestaohospitalar.repository.EnderecoRepository;
import com.ifba.gestaohospitalar.repository.EspecialidadeRepository;
import com.ifba.gestaohospitalar.repository.EstadoRepository;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.service.CidadeService;
import com.ifba.gestaohospitalar.service.EspecialidadeService;
import com.ifba.gestaohospitalar.service.EstadoService;
import com.ifba.gestaohospitalar.service.FuncionarioService;
import com.ifba.gestaohospitalar.service.exceptions.DataIntegrityException;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class FuncionarioServiceImpl implements FuncionarioService{
	
	@Autowired
	private FuncionarioRepository repository;
	
	@Autowired
	private EspecialidadeService especialidadeService;
	
	@Autowired
	private EspecialidadeRepository especialidadeRepository;
	
	@Autowired
	private CidadeService cidadeService;
	
	@Autowired
	private EstadoService estadoService;
	
	@Autowired
	private CidadeRepository cidadeRepository;

	@Autowired
	private EstadoRepository estadoRepository;

	@Autowired
	private EnderecoRepository enderecoRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	private DateFormat formatoEntrada = new SimpleDateFormat("yyyy/MM/dd");

	private DateFormat formatoSaida = new SimpleDateFormat("dd/MM/yyyy");
	
	@Override
	public Funcionario findId(Long id) {
		Optional<Funcionario> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado. Id: " + id + ", Tipo: " + Funcionario.class.getName()));
	}
	
	public List<Funcionario> findByEspecialidade(Integer id) {
		return repository.findByEspecialidade(especialidadeService.findId(id));
	}

	public List<Funcionario> findName(String name) {
		return repository.findByNameContaining(name.toLowerCase());
	}
	
	@Override
	public Funcionario findEmail(String email) {
		Funcionario usuario = repository.findByEmail(email);
	    if (usuario == null) {
	        throw new NoSuchElementException("Email não existe!" + email);
	    }
	    return usuario;
	}

	@Override
	public Funcionario insert(Funcionario obj) {
		obj.setId(null);
		if(obj.getEspecialidade() != null) {
			especialidadeRepository.save(obj.getEspecialidade());
		}
		estadoRepository.save(obj.getEndereco().getCidade().getEstado());
		cidadeRepository.save(obj.getEndereco().getCidade());
		enderecoRepository.save(obj.getEndereco());
		return repository.save(obj);
	}

	@Override
	public Funcionario update(Funcionario obj) {
		Funcionario newObj = findId(obj.getId());
		Endereco newEnd = newObj.getEndereco();
		updateData(newObj, obj, newEnd);
		enderecoRepository.save(newObj.getEndereco());
		cidadeRepository.save(newObj.getEndereco().getCidade());
		estadoRepository.save(newObj.getEndereco().getCidade().getEstado());
		if(newObj.getEspecialidade() != null) {
			especialidadeRepository.save(newObj.getEspecialidade());
		}
		return repository.save(newObj);
	}

	@Override
	public Funcionario passwordUpdate(Funcionario obj) {
		Funcionario newObj = findId(obj.getId());
		updateDataPassword(newObj, obj);
		return repository.save(newObj);
	}

	@Override
	public List<Funcionario> findAll() {
		return repository.findAll();
	}

	@Override
	public void delete(Long id) {
		findId(id);
		try {
			repository.deleteById(id);
		} catch (DataIntegrityException e) {
			throw new DataIntegrityException("Não é possível excluir um funcionario que possui consultas!");
		}
		
	}
	
	private void updateDataPassword(Funcionario newObj, Funcionario obj) {
		newObj.setSenha(obj.getSenha());
	}

	private void updateData(Funcionario newObj, Funcionario obj, Endereco newEnd) {
		newObj.setNome(obj.getNome());
		newObj.setEmail(obj.getEmail());
		newObj.setEspecialidade(obj.getEspecialidade());
		newObj.setCrm(obj.getCrm());
		newObj.setTelefone(obj.getTelefone());
		newObj.setDataDeAdmissao(obj.getDataDeAdmissao());
		newObj.setDataDeDemissao(obj.getDataDeDemissao());
		newEnd.setLogradouro(obj.getEndereco().getLogradouro());
		newEnd.setBairro(obj.getEndereco().getBairro());
		newEnd.setCep(obj.getEndereco().getCep());
		newEnd.setComplemento(obj.getEndereco().getComplemento());
		newEnd.setNumero(obj.getEndereco().getNumero());
		newEnd.setCidade(obj.getEndereco().getCidade());
		newObj.setEndereco(newEnd);
	}
	@Override
	public Funcionario fromDTO(FuncionarioDTO objDto) throws ParseException{
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
		Endereco end = new Endereco(null, objDto.getLogradouro(), objDto.getNumero(), objDto.getCep(),
				objDto.getBairro(), objDto.getComplemento(), cid);
		Date data = formatoEntrada.parse(objDto.getDataDeAdmissao());
        String dataFormatada = formatoSaida.format(data);
		
		Funcionario obj = new Funcionario(objDto.getId(), objDto.getNome(), objDto.getEmail(), null, end, sdf.parse(dataFormatada), objDto.getTelefone());
		obj.setEspecialidade(especialidadeService.findId(objDto.getEspecialidade()));
		System.out.println(objDto.getDataDeDemissao());
		if(objDto.getDataDeDemissao().length() > 0  && objDto.getDataDeDemissao() != null) {
			Date data2 = formatoEntrada.parse(objDto.getDataDeDemissao());
	        String dataFormatada2 = formatoSaida.format(data2);
	        obj.setDataDeDemissao(sdf.parse(dataFormatada2));
		}else {
			obj.setDataDeDemissao(null);
		}
		if(objDto.getCrm() != null) {
			obj.setCrm(objDto.getCrm());
		}

		if(objDto.getPerfis() != null) {
			obj.addPerfil(Perfil.toEnum(objDto.getPerfis()));
		}
		if(objDto.getEspecialidade() != null) {
			obj.setEspecialidade(especialidadeService.findId(objDto.getEspecialidade()));
		}
		return obj;
	}

	@Override
	public Funcionario fromDTO(FuncionarioNewDTO objDto) throws ParseException {
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
		Endereco end = new Endereco(null, objDto.getLogradouro(), objDto.getNumero(), objDto.getCep(),
				objDto.getBairro(), objDto.getComplemento(), cid);
		Date data = formatoEntrada.parse(objDto.getDataDeAdmissao());
        String dataFormatada = formatoSaida.format(data);
		Funcionario obj = new Funcionario(null, objDto.getNome(), objDto.getEmail(), bCryptPasswordEncoder.encode(objDto.getSenha()), end, sdf.parse(dataFormatada), objDto.getTelefone());
		if(objDto.getCrm() != null) {
			obj.setCrm(objDto.getCrm());
		}
		
		if(objDto.getPerfis() != null) {
			obj.addPerfil(Perfil.toEnum(objDto.getPerfis()));
		}
		
		if(objDto.getEspecialidade() != null) {
			obj.setEspecialidade(especialidadeService.findId(objDto.getEspecialidade()));
		}
		return obj;
	}

	@Override
	public Funcionario fromDTO(FuncionarioPasswordDTO objDto) {
		Funcionario obj = new Funcionario(objDto.getId(), null, null, null, null, null, null);
		if(bCryptPasswordEncoder.matches(objDto.getVelhaSenha(), findId(objDto.getId()).getSenha()) == true) {
			 obj.setSenha(bCryptPasswordEncoder.encode(objDto.getNovaSenha()));
			
		}
		return obj;
	}

}
