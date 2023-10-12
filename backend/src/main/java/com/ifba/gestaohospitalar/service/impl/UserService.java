package com.ifba.gestaohospitalar.service.impl;

import org.springframework.security.core.context.SecurityContextHolder;

import com.ifba.gestaohospitalar.security.UserSS;

public class UserService {
	
	public static UserSS authenticated() {
		try {
			return (UserSS) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		}catch (Exception e) {
			return null;
		}
		
	}

}
