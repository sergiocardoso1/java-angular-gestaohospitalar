package com.ifba.gestaohospitalar.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ifba.gestaohospitalar.enums.Perfil;
import com.ifba.gestaohospitalar.model.Cidade;
import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.model.Endereco;
import com.ifba.gestaohospitalar.model.Especialidade;
import com.ifba.gestaohospitalar.model.Estado;
import com.ifba.gestaohospitalar.model.Funcionario;
import com.ifba.gestaohospitalar.model.Paciente;
import com.ifba.gestaohospitalar.model.Procedimento;
import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;
import com.ifba.gestaohospitalar.repository.CidadeRepository;
import com.ifba.gestaohospitalar.repository.ConsultaRepository;
import com.ifba.gestaohospitalar.repository.EnderecoRepository;
import com.ifba.gestaohospitalar.repository.EspecialidadeRepository;
import com.ifba.gestaohospitalar.repository.EstadoRepository;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.repository.LaudoRepository;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
import com.ifba.gestaohospitalar.repository.ProcedimentoMarcarRepository;
import com.ifba.gestaohospitalar.repository.ProcedimentoRepository;

@Service
@Component
public class DBServiceImpl {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private PacienteRepository pacienteRepository;

	@Autowired
	private EstadoRepository estadoRepository;

	@Autowired
	private CidadeRepository cidadeRepository;

	@Autowired
	private EnderecoRepository enderecoRepository;

	@Autowired
	private FuncionarioRepository funcionarioRepository;

	@Autowired
	private EspecialidadeRepository especialidadeRepository;

	@Autowired
	private ProcedimentoRepository procedimentoRepository;

	@Autowired
	private ConsultaRepository consultaRepository;

	@Autowired
	private ProcedimentoMarcarRepository procedimentoMarcarRepository;
	
	@Autowired
	private LaudoRepository laudoRepository;


	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	private SimpleDateFormat sdfData = new SimpleDateFormat("HH:mm");

	public void instantiateTestDatabase() throws ParseException {

		Estado est1 = new Estado(null, "MG");
		Estado est2 = new Estado(null, "SP");
		Estado est3 = new Estado(null, "BA");

		Cidade c1 = new Cidade(null, "Uberlândia", est1);
		Cidade c2 = new Cidade(null, "São Paulo", est2);
		Cidade c3 = new Cidade(null, "Campinas", est2);
		Cidade c4 = new Cidade(null, "Valença", est3);
		
		est1.getCidades().addAll(Arrays.asList(c1));
		est2.getCidades().addAll(Arrays.asList(c2, c3));
		est3.getCidades().addAll(Arrays.asList(c4));

		estadoRepository.saveAll(Arrays.asList(est1, est2, est3));
		cidadeRepository.saveAll(Arrays.asList(c1, c2, c3, c4));

		Endereco endereco1 = new Endereco(null, "Rua 1", "18", "45400000", "Centro", "1 andar", c4);
		Endereco endereco2 = new Endereco(null, "Rua 1", "18", "45400000", "Centro", "1 andar", c1);

		enderecoRepository.saveAll(Arrays.asList(endereco1, endereco2));

		Paciente pac1 = new Paciente(null, "Sérgio", "sergiocardosodeveloper@gmail.com", sdf.parse("26/04/1998"),
				"Convenio", "75981616503", "64285214075", new Date(), endereco1);

		pacienteRepository.save(pac1);

		Paciente pac2 = new Paciente(null, "Júlio Cesar", "jdsajdsa@gmail.com", sdf.parse("29/06/1999"),
				"Convenio", "75981616503", "38239724302", new Date(), endereco1);

		pacienteRepository.save(pac2);
		
		Paciente pac3 = new Paciente(null, "Marco Aurélio", "jdsa2332sa@gmail.com", sdf.parse("29/04/1999"),
				"Convenio", "75981616503", "50767273800", new Date(), endereco1);
		
		pacienteRepository.save(pac3);
		
		Paciente pac4 = new Paciente(null, "Ronaldo Nazário", "jdsajds555a@gmail.com", sdf.parse("22/04/1999"),
				"Convenio", "75981616503", "41208351206", new Date(), endereco1);
		
		pacienteRepository.save(pac4);

		Especialidade espec = new Especialidade(null, "Ortopedista");
		Especialidade espec2 = new Especialidade(null, "Nutricionista");
		Especialidade espec3 = new Especialidade(null, "Cardiologista");
		Especialidade espec4 = new Especialidade(null, "Médico Geral");
		especialidadeRepository.saveAll(Arrays.asList(espec, espec2, espec3, espec4));

		Funcionario func = new Funcionario(null, "Sérgio", "sergioifbaiano@hotmail.com",
				bCryptPasswordEncoder.encode("123"), endereco1, sdf.parse("26/08/2010"), "75981616503");
		func.addPerfil(Perfil.ADMIN);

		Funcionario func2 = new Funcionario(null, "Pedro", "sergiocardosodeveloper@gmail.com",
				bCryptPasswordEncoder.encode("123"), endereco1, sdf.parse("22/02/2010"), "75981616503");
		func2.addPerfil(Perfil.MEDICO);
		func2.setCrm("123213");
		func2.setEspecialidade(espec);

		Funcionario func3 = new Funcionario(null, "Victor", "victortester@gmail.com",
				bCryptPasswordEncoder.encode("123"), endereco1, sdf.parse("26/08/2012"), "75981616503");
		func3.addPerfil(Perfil.MEDICO);
		func3.setCrm("123213");
		func3.setEspecialidade(espec);

		Procedimento proced = new Procedimento(null, "Plastica");
		Procedimento proced2 = new Procedimento(null, "Radiografia");
		Procedimento proced3 = new Procedimento(null, "Sonogafia");
		Procedimento proced4 = new Procedimento(null, "Eletrocardiograma");
		procedimentoRepository.saveAll(Arrays.asList(proced, proced2, proced3, proced4));

		funcionarioRepository.saveAll(Arrays.asList(func, func2, func3));
		
		Consulta cons = new Consulta(null, func3, sdf.parse("15/11/2023"), sdfData.parse("15:00"), pac2, 300.0);
		Consulta cons2 = new Consulta(null, func3, sdf.parse("15/11/2023"), sdfData.parse("15:00"), pac1, 300.0);
		
		ProcedimentoMarcar procMarcar = new ProcedimentoMarcar(null, proced, sdf.parse("15/11/2023"), sdfData.parse("15:00"), pac2, 300.0);
		
		
		consultaRepository.saveAll(Arrays.asList(cons, cons2));
		procedimentoMarcarRepository.save(procMarcar);
		
		
		
		
	
		

	}

}
