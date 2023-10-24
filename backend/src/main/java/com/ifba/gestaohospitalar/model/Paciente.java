package com.ifba.gestaohospitalar.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Paciente implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String email;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date dataDeNascimento;
	private String convenio;
	private String telefone;
	private String cpf;
	private Date dataDoCadastro;

	@OneToOne
	@JoinColumn(name = "endereco.id")
	private Endereco endereco;

	@OneToMany(mappedBy = "paciente")
	@JsonIgnore
	private List<Consulta> consulta = new ArrayList<>();

	@OneToMany(mappedBy = "paciente")
	@JsonIgnore
	private List<ProcedimentoMarcar> procedimentoMarcar = new ArrayList<>();

	@OneToOne
	@JoinColumn(name = "prontuario.id")
	private Prontuario prontuario;

	public Paciente() {

	}

	public Paciente(Long id, String nome, String email, Date dataDeNascimento, String convenio, String telefone,
			String cpf, Date dataDoCadastro, Endereco endereco) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.dataDeNascimento = dataDeNascimento;
		this.convenio = convenio;
		this.telefone = telefone;
		this.cpf = cpf;
		this.dataDoCadastro = dataDoCadastro;
		this.endereco = endereco;
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

	public Date getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(Date dataDeNascimento) {
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

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getDataDoCadastro() {
		return dataDoCadastro;
	}

	public void setDataDoCadastro(Date dataDoCadastro) {
		this.dataDoCadastro = dataDoCadastro;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public List<Consulta> getConsulta() {
		return consulta;
	}

	public void setConsulta(List<Consulta> consulta) {
		this.consulta = consulta;
	}

	public List<ProcedimentoMarcar> getProcedimentoMarcar() {
		return procedimentoMarcar;
	}

	public void setProcedimentoMarcar(List<ProcedimentoMarcar> procedimentoMarcar) {
		this.procedimentoMarcar = procedimentoMarcar;
	}

	public Prontuario getProntuario() {
		return prontuario;
	}

	public void setProntuario(Prontuario prontuario) {
		this.prontuario = prontuario;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Paciente other = (Paciente) obj;
		return Objects.equals(id, other.id);
	}

}
