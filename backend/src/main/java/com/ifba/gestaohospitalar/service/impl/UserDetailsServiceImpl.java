package com.ifba.gestaohospitalar.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.model.Funcionario;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.security.UserSS;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private FuncionarioRepository repository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Funcionario funcionario = repository.findByEmail(email);
		if(funcionario == null) {
			throw new UsernameNotFoundException(email);
		}
		
		return new UserSS(funcionario.getId(),funcionario.getEmail(),funcionario.getSenha(), funcionario.getPerfis());
	}

}
