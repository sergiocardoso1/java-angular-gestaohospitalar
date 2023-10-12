package com.ifba.gestaohospitalar.service.exceptions;

public class ConsultaNaoDisponivelException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ConsultaNaoDisponivelException(String msg) {
		super(msg);
	}
	
	public ConsultaNaoDisponivelException(String msg, Throwable cause) {
		super(msg, cause);
	}

}
