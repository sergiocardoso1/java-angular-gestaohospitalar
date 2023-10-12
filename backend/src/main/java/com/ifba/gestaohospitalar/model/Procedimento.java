package com.ifba.gestaohospitalar.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Procedimento implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;

	@JsonIgnore
	@OneToMany(mappedBy = "procedimento")
	private List<ProcedimentoMarcar> procedimentoMarcar = new ArrayList<>();

	public Procedimento() {

	}

	public Procedimento(Long id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
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

	public List<ProcedimentoMarcar> getProcedimento() {
		return procedimentoMarcar;
	}

	public void setProcedimento(List<ProcedimentoMarcar> procedimentoMarcar) {
		this.procedimentoMarcar = procedimentoMarcar;
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
		Procedimento other = (Procedimento) obj;
		return Objects.equals(id, other.id);
	}

}
