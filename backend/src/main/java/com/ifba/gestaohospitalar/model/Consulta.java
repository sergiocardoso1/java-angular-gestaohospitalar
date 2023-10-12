package com.ifba.gestaohospitalar.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Consulta implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "medico")
	private Funcionario medico;

	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date dataConsulta;

	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern = "HH:mm")
	private Date horarioConsulta;

	@ManyToOne
	@JoinColumn(name = "paciente")
	private Paciente paciente;
	private Double valor;

	public Consulta() {
	}

	public Consulta(Long id, Funcionario medico, Date dataConsulta, Date horarioConsulta, Paciente paciente,
			Double valor) {
		super();
		this.id = id;
		this.medico = medico;
		this.dataConsulta = dataConsulta;
		this.horarioConsulta = horarioConsulta;
		this.paciente = paciente;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Funcionario getMedico() {
		return medico;
	}

	public void setMedico(Funcionario medico) {
		this.medico = medico;
	}

	public Date getDataConsulta() {
		return dataConsulta;
	}

	public void setDataConsulta(Date dataConsulta) {
		this.dataConsulta = dataConsulta;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Date getHorarioConsulta() {
		return horarioConsulta;
	}

	public void setHorarioConsulta(Date horarioConsulta) {
		this.horarioConsulta = horarioConsulta;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
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
		Consulta other = (Consulta) obj;
		return Objects.equals(id, other.id);
	}

}
