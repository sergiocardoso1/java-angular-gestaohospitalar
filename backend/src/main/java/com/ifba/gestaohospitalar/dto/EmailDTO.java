package com.ifba.gestaohospitalar.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

public class EmailDTO {

	@NotEmpty(message = "Preenchimento obrigatório")
	@Email(message = "Email Invalido")
	private String email;

	public EmailDTO() {

	}

	public EmailDTO(@NotEmpty(message = "Preenchimento obrigatório") @Email(message = "Email Invalido") String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
