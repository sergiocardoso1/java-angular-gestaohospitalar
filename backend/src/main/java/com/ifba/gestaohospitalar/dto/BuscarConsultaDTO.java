package com.ifba.gestaohospitalar.dto;

public class BuscarConsultaDTO {

	private String data;
	private Long medicoId;
	
	public BuscarConsultaDTO() {
		
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public Long getMedicoId() {
		return medicoId;
	}

	public void setMedicoId(Long medicoId) {
		this.medicoId = medicoId;
	}
	
}
