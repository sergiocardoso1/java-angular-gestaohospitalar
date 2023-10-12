package com.ifba.gestaohospitalar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class GestaohospitalarApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestaohospitalarApplication.class, args);
	}
	
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}
