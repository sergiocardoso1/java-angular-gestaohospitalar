package com.ifba.gestaohospitalar.config;

import java.util.TimeZone;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.StdDateFormat;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configuration
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();

        // Configuração do formato de data padrão para ISO 8601 UTC
        objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        objectMapper.setDateFormat(new StdDateFormat().withColonInTimeZone(true).withTimeZone(TimeZone.getTimeZone("UTC")));

        // Registro do módulo JavaTime para suporte a classes java.time.*
        objectMapper.registerModule(new JavaTimeModule());

        return objectMapper;
    }
}