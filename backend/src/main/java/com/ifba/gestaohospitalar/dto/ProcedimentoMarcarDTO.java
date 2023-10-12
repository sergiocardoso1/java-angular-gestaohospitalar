package com.ifba.gestaohospitalar.dto;

public class ProcedimentoMarcarDTO {

	private Long id;
	private String dataProcedimento;
	private Double valor;
	
	public ProcedimentoMarcarDTO() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDataProcedimento() {
		return dataProcedimento;
	}

	public void setDataProcedimento(String dataProcedimento) {
		this.dataProcedimento = dataProcedimento;
	}


	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}
	
	

}
