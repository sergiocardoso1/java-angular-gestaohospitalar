import { Paciente } from "./pacienteModel"

export type Prontuario = {
    id:number,
    dataDeCadastro:string,
    paciente:Paciente

}