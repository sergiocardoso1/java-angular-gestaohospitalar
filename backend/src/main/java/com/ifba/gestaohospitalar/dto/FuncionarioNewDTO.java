package com.ifba.gestaohospitalar.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

public class FuncionarioNewDTO {

	@NotEmpty(message = "O campo nome não pode ser vazio")
	@Length(min = 2, max = 120, message = "O tamanho deve ser entre 2 e 120")
	private String nome;
	@NotEmpty(message = "O campo email não pode ser vazio")
	@Email(message = "Email invalido")
	private String email;
	@NotEmpty(message = "O campo senha não pode ser vazio")
	@Length(min = 8, max = 30, message = "O tamanho deve ser entre 8 e 30")
	private String senha;
	private Integer perfis;
	private Integer especialidade;
	private String crm;
	private String telefone;
	private String dataDeAdmissao;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String logradouro;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String numero;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String cep;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String bairro;
	private String complemento;
	@NotEmpty
	private String cidade;
	@NotEmpty
	private String estado;

	public FuncionarioNewDTO() {

	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCrm() {
		return crm;
	}

	public void setCrm(String crm) {
		this.crm = crm;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Integer getPerfis() {
		return perfis;
	}

	public void setPerfis(Integer perfis) {
		this.perfis = perfis;
	}

	public Integer getEspecialidade() {
		return especialidade;
	}

	public void setEspecialidade(Integer especialidade) {
		this.especialidade = especialidade;
	}

	public String getDataDeAdmissao() {
		return dataDeAdmissao;
	}

	public void setDataDeAdmissao(String dataDeAdmissao) {
		this.dataDeAdmissao = dataDeAdmissao;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

}
