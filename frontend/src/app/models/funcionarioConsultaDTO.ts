
import { especialidade } from "./especialidadeModel"

export type funcionarioConsultaDTO = {
  id:number,
  nome:string,
  especialidade:especialidade,
  horario:string[]

}
