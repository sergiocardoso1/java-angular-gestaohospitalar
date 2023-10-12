package com.ifba.gestaohospitalar.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

public class PacienteDTO {

	private Long id;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	@Length(min = 2, max = 60, message = "O tamanho deve ser entre 2 e 60")
	private String nome;
	@Email
	private String email;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String dataDeNascimento;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String convenio;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String telefone;
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

	public PacienteDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(String dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}

	public String getConvenio() {
		return convenio;
	}

	public void setConvenio(String convenio) {
		this.convenio = convenio;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
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
