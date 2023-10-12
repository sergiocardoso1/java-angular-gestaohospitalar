package com.ifba.gestaohospitalar.service;

import java.text.ParseException;
import java.util.List;

import com.ifba.gestaohospitalar.dto.FuncionarioDTO;
import com.ifba.gestaohospitalar.dto.FuncionarioNewDTO;
import com.ifba.gestaohospitalar.dto.FuncionarioPasswordDTO;
import com.ifba.gestaohospitalar.model.Funcionario;

public interface FuncionarioService {

	public Funcionario findId(Long id);

	public Funcionario findEmail(String email);

	public List<Funcionario> findName(String name);

	public Funcionario insert(Funcionario obj);

	public Funcionario update(Funcionario obj);

	public Funcionario passwordUpdate(Funcionario obj);

	public List<Funcionario> findAll();

	public void delete(Long id);

	public Funcionario fromDTO(FuncionarioDTO objDto) throws ParseException;

	public Funcionario fromDTO(FuncionarioNewDTO objDto) throws ParseException;

	public List<Funcionario> findByEspecialidade(Integer id);

	public Funcionario fromDTO(FuncionarioPasswordDTO objDto);
}
