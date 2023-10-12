import { funcionario } from "./funcionarioModel"
import { Paciente } from "./pacienteModel"

export type consulta = {
  id:number
  medico:funcionario,
  dataConsulta:string,
  horarioConsulta:string,
  paciente:Paciente,
  valor:number

}
