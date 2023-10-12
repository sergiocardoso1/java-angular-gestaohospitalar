package com.ifba.gestaohospitalar.dto;

public class ProcedimentoMarcarNewDTO {

	private Long procedimentoId;
	private String dataProcedimento;
	private String horarioProcedimento;
	private Long pacienteId;
	private Double valor;

	public ProcedimentoMarcarNewDTO() {

	}

	public Long getProcedimentoId() {
		return procedimentoId;
	}

	public void setProcedimentoId(Long procedimentoId) {
		this.procedimentoId = procedimentoId;
	}

	public String getDataProcedimento() {
		return dataProcedimento;
	}

	public void setDataProcedimento(String dataProcedimento) {
		this.dataProcedimento = dataProcedimento;
	}

	public String getHorarioProcedimento() {
		return horarioProcedimento;
	}

	public void setHorarioProcedimento(String horarioProcedimento) {
		this.horarioProcedimento = horarioProcedimento;
	}

	public Long getPacienteId() {
		return pacienteId;
	}

	public void setPacienteId(Long pacienteId) {
		this.pacienteId = pacienteId;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

}
