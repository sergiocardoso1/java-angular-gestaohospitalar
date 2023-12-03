package com.ifba.gestaohospitalar.controller;

import java.io.ByteArrayOutputStream;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.xhtmlrenderer.pdf.ITextRenderer;

import com.ifba.gestaohospitalar.model.Consulta;
import com.ifba.gestaohospitalar.model.Especialidade;
import com.ifba.gestaohospitalar.model.Funcionario;
import com.ifba.gestaohospitalar.model.Laudo;
import com.ifba.gestaohospitalar.model.Paciente;
import com.ifba.gestaohospitalar.model.Procedimento;
import com.ifba.gestaohospitalar.model.ProcedimentoMarcar;
import com.ifba.gestaohospitalar.service.ConsultaService;
import com.ifba.gestaohospitalar.service.EspecialidadeService;
import com.ifba.gestaohospitalar.service.FuncionarioService;
import com.ifba.gestaohospitalar.service.LaudoService;
import com.ifba.gestaohospitalar.service.MarcarProcedimentoService;
import com.ifba.gestaohospitalar.service.PacienteService;
import com.ifba.gestaohospitalar.service.ProcedimentoService;

@RestController
@RequestMapping("/pdf")
public class PDFPrintController {

	@Autowired
	private TemplateEngine templateEngine;

	@Autowired
	private EspecialidadeService especialidadeService;

	@Autowired
	private ProcedimentoService procedimentoService;

	@Autowired
	private ConsultaService consultaService;

	@Autowired
	private MarcarProcedimentoService marcarProcedimentoService;

	@Autowired
	private PacienteService pacienteService;

	@Autowired
	private FuncionarioService funcionarioService;
	
	@Autowired
	private LaudoService laudoService;
	

	@RequestMapping(value = "/especialidades", method = RequestMethod.GET)
	public void printEntityEspecialidades(HttpServletResponse response) {

		Context context = new Context();
		List<Especialidade> especialidades = especialidadeService.findAll();
		context.setVariable("especialidades", especialidades);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-especialidades", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/tiposprocedimentos", method = RequestMethod.GET)
	public void printEntityTipoProcedimentos(HttpServletResponse response) {
		Context context = new Context();
		List<Procedimento> procedimentos = procedimentoService.findAll();
		context.setVariable("procedimentos", procedimentos);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-procedimentos", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/consultas", method = RequestMethod.GET)
	public void printEntityConsultas(HttpServletResponse response) {
		Context context = new Context();
		List<Consulta> consultas = consultaService.findAll();
		context.setVariable("consultas", consultas);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-consultas", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/procedimentos", method = RequestMethod.GET)
	public void printEntityProcedimentos(HttpServletResponse response) {
		Context context = new Context();
		List<ProcedimentoMarcar> procedimentoMarcar = marcarProcedimentoService.findAll();
		context.setVariable("procedimentoMarcar", procedimentoMarcar);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-procedimentosmarcados", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/pacientes", method = RequestMethod.GET)
	public void printEntityPacientes(HttpServletResponse response) {
		Context context = new Context();
		List<Paciente> pacientes = pacienteService.findAll();
		context.setVariable("pacientes", pacientes);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-pacientes", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/funcionarios", method = RequestMethod.GET)
	public void printEntityFuncionarios(HttpServletResponse response) {
		Context context = new Context();
		List<Funcionario> funcionarios = funcionarioService.findAll();
		context.setVariable("funcionarios", funcionarios);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-funcionarios", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/paciente/{id}", method = RequestMethod.GET)
	public void printEntityPaciente(@PathVariable Long id, HttpServletResponse response) {
		Context context = new Context();
		Paciente paciente = pacienteService.findId(id);
		context.setVariable("paciente", paciente);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-paciente", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/paciente/mes/{mes}", method = RequestMethod.GET)
	public void printEntityPacienteByMonth(@PathVariable int mes, HttpServletResponse response) {
		Context context = new Context();
		List<Paciente> pacientes = pacienteService.findMes(mes);
		context.setVariable("pacientes", pacientes);
		context.setVariable("mes", mes);
		context.setVariable("datageracao", new Date());
		String html = templateEngine.process("template-pacientes-aniversario", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/consultas/{data}", method = RequestMethod.GET)
	public void printEntityConsultasByDate(@PathVariable String data, HttpServletResponse response)
			throws ParseException {
		Context context = new Context();
		List<Consulta> consultas = consultaService.findByDate(data);
		context.setVariable("consultas", consultas);
		context.setVariable("data", data);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-consultas-data", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}

	@RequestMapping(value = "/laudo/{id}", method = RequestMethod.GET)
	public void printEntityLaudo(@PathVariable Long id, HttpServletResponse response) {
		Context context = new Context();
		Laudo laudo = laudoService.findId(id);
		context.setVariable("laudo", laudo);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-laudo", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}
	
	@RequestMapping(value = "/caixa/mes/{mes}/ano/{ano}", method = RequestMethod.GET)
	public void printCaixa(@PathVariable int mes, @PathVariable int ano, HttpServletResponse response) {
		Context context = new Context();
		double caixaConsulta = consultaService.valormes(mes, ano);
		double caixaProcedimento = marcarProcedimentoService.valormes(mes, ano);
		context.setVariable("quantidadeconsulta", consultaService.findQntMes(mes, ano));
		context.setVariable("quantidadeprocedimento", marcarProcedimentoService.findQntMes(mes, ano));
		context.setVariable("caixa", caixaConsulta + caixaProcedimento);
		context.setVariable("mes", mes);
		context.setVariable("ano", ano);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-caixa", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}
	
	
	@RequestMapping(value = "/procedimento/{id}", method = RequestMethod.GET)
	public void printEntityProcedimentoPorId(@PathVariable Long id, HttpServletResponse response) {
		Context context = new Context();
		ProcedimentoMarcar procedimentoMarcar = marcarProcedimentoService.findId(id);
		context.setVariable("procedimento", procedimentoMarcar);
		context.setVariable("datageracao", new Date());

		String html = templateEngine.process("template-laudoprocedimento", context);

		try {
			ITextRenderer renderer = new ITextRenderer();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

			renderer.setDocumentFromString(html);
			renderer.layout();
			renderer.createPDF(outputStream);
			renderer.finishPDF();

			// Set the response content type to PDF
			response.setContentType("application/pdf");

			// Optional: Set the Content-Disposition header to prompt the user to download
			// the PDF with a specific name
			response.setHeader("Content-Disposition", "attachment; filename=\"arquivo.pdf\"");

			// Write the PDF content to the response output stream
			response.getOutputStream().write(outputStream.toByteArray());
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			// Handle any exceptions (you may want to send an error response to the client)
		}
	}
}
