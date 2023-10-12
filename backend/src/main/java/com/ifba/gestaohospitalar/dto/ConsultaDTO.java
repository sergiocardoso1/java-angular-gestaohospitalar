package com.ifba.gestaohospitalar.dto;

public class ConsultaDTO {

	private Long id;
	private String dataConsulta;
	private Double valor;
	
	public ConsultaDTO() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDataConsulta() {
		return dataConsulta;
	}

	public void setDataConsulta(String dataConsulta) {
		this.dataConsulta = dataConsulta;
	}


	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}
	
	

}
