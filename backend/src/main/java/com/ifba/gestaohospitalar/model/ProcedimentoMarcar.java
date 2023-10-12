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
public class ProcedimentoMarcar implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "procedimento_id")
	private Procedimento procedimento;

	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date dataProcedimento;

	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern = "HH:mm")
	private Date horarioProcedimento;

	@ManyToOne
	@JoinColumn(name = "paciente_id")
	private Paciente paciente;
	private Double valor;

	public ProcedimentoMarcar() {
	}

	public ProcedimentoMarcar(Long id, Date dataProcedimento, Date horarioProcedimento, Paciente paciente, Double valor) {
		super();
		this.id = id;
		this.dataProcedimento = dataProcedimento;
		this.horarioProcedimento = horarioProcedimento;
		this.paciente = paciente;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDataProcedimento() {
		return dataProcedimento;
	}

	public void setDataProcedimento(Date dataProcedimento) {
		this.dataProcedimento = dataProcedimento;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Date getHorarioProcedimento() {
		return horarioProcedimento;
	}

	public void setHorarioProcedimento(Date horarioProcedimento) {
		this.horarioProcedimento = horarioProcedimento;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public Procedimento getTipoProcedimento() {
		return procedimento;
	}

	public void setTipoProcedimento(Procedimento procedimento) {
		this.procedimento = procedimento;
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
		ProcedimentoMarcar other = (ProcedimentoMarcar) obj;
		return Objects.equals(id, other.id);
	}

}
