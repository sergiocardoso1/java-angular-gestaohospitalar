import { Paciente } from "./pacienteModel"
import { Procedimento } from "./procedimentoModel"

export type ProcedimentoMarcar = {
    id:number,
    procedimento:Procedimento,
    dataProcedimento:string,
    horarioProcedimento:string,
    paciente:Paciente,
    valor:number
  
  }
  