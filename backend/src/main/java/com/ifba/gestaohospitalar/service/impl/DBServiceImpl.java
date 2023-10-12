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
import com.ifba.gestaohospitalar.repository.CidadeRepository;
import com.ifba.gestaohospitalar.repository.ConsultaRepository;
import com.ifba.gestaohospitalar.repository.EnderecoRepository;
import com.ifba.gestaohospitalar.repository.EspecialidadeRepository;
import com.ifba.gestaohospitalar.repository.EstadoRepository;
import com.ifba.gestaohospitalar.repository.FuncionarioRepository;
import com.ifba.gestaohospitalar.repository.PacienteRepository;
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
			
		Paciente pac1 = new Paciente(null, "Sérgio", "sergiocardosodeveloper@gmail.com", sdf.parse("26/04/1998"), "Convenio", "75981616503", "64285214075",new Date() ,endereco1);
		
		pacienteRepository.save(pac1);
		
		Especialidade espec = new Especialidade(null, "Ortopedista");
		especialidadeRepository.save(espec);
		
		Funcionario func = new Funcionario(null, "Sérgio", "sergioifbaiano@hotmail.com", bCryptPasswordEncoder.encode("123"), endereco1,sdf.parse("26/08/2010"), "75981616503");
		func.addPerfil(Perfil.ADMIN);
		
		Funcionario func2 = new Funcionario(null, "Sérgio", "sergiocardosodeveloper@gmail.com", bCryptPasswordEncoder.encode("123"), endereco1,sdf.parse("26/08/2010"), "75981616503");
		func2.addPerfil(Perfil.MEDICO);
		func2.setCrm("123213");
		func2.setEspecialidade(espec);
		
		Funcionario func3 = new Funcionario(null, "Victor", "victortester@gmail.com", bCryptPasswordEncoder.encode("123"), endereco1,sdf.parse("26/08/2010"), "75981616503");
		func3.addPerfil(Perfil.MEDICO);
		func3.setCrm("123213");
		func3.setEspecialidade(espec);
		
		funcionarioRepository.saveAll(Arrays.asList(func, func2, func3));
		
		
		
		Procedimento proced = new Procedimento(null, "Plastica");
		procedimentoRepository.save(proced);
			
	
		Consulta consulta2 = new Consulta(null, func2, sdf.parse("11/10/2023"), sdfData.parse("15:00"),pac1,320.0);
		consultaRepository.save(consulta2);
		Consulta consulta3 = new Consulta(null, func2, sdf.parse("11/10/2023"), sdfData.parse("16:00"),pac1,320.0);
		consultaRepository.save(consulta3);
	}


}
