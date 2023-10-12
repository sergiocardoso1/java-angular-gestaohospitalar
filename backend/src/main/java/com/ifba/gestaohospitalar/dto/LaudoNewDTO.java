package com.ifba.gestaohospitalar.dto;

import javax.validation.constraints.NotEmpty;

public class LaudoNewDTO {

	private Long consultaId;
	@NotEmpty(message = "O campo nome não pode ser vazio")
	private String descricao;

	public LaudoNewDTO() {

	}

	public Long getConsultaId() {
		return consultaId;
	}

	public void setConsultaId(Long consultaId) {
		this.consultaId = consultaId;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
