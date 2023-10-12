package com.ifba.gestaohospitalar.dto;

import javax.validation.constraints.NotEmpty;

import com.ifba.gestaohospitalar.model.Funcionario;

public class EspecialidadeNewDTO {
	
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String nome;
	private Funcionario funcionario;
	
	public EspecialidadeNewDTO() {
		
	}
	

	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Funcionario getFuncionario() {
		return funcionario;
	}
	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	

}
