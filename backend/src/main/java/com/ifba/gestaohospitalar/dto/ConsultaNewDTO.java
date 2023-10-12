package com.ifba.gestaohospitalar.dto;

public class ConsultaNewDTO {

	private Long medicoId;
	private String dataConsulta;
	private String horarioConsulta;
	private Long pacienteId;
	private Double valor;

	public ConsultaNewDTO() {

	}

	public Long getMedicoId() {
		return medicoId;
	}

	public void setMedicoId(Long medicoId) {
		this.medicoId = medicoId;
	}

	public String getDataConsulta() {
		return dataConsulta;
	}

	public void setDataConsulta(String dataConsulta) {
		this.dataConsulta = dataConsulta;
	}

	public String getHorarioConsulta() {
		return horarioConsulta;
	}

	public void setHorarioConsulta(String horarioConsulta) {
		this.horarioConsulta = horarioConsulta;
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
