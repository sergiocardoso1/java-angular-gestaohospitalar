package com.ifba.gestaohospitalar.service.impl;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.model.Funcionario;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.service.exceptions.ObjectNotFoundException;

@Service
public class AuthService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private EmailService emailService;
	
	private Random rand = new Random();
	
	public void sendNewPassword(String email) {
		Funcionario funcionario = funcionarioRepository.findByEmail(email);
		if(funcionario == null) {
			throw new ObjectNotFoundException("Email não encontrado");
		}
		String newPass = newPassword();
		funcionario.setSenha(bCryptPasswordEncoder.encode(newPass));
		funcionarioRepository.save(funcionario);
		emailService.sendNewPasswordEmail(funcionario, newPass);
	}

	private String newPassword() {
		char[] vet = new char[10];
		for(int i=0; i<10; i++) {
			vet[i] = randomChar();
		}
		return new String(vet);
	}

	private char randomChar() {
		int opt = rand.nextInt(3);
		if(opt == 0) {
			return (char) (rand.nextInt(10) + 48);
		}
		else if(opt == 1) {
			return (char) (rand.nextInt(26) + 65);
		}
		else {
			return (char) (rand.nextInt(26) + 97);
		}
	}
}
