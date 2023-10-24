import { endereco } from "./enderecoModel"
import { Prontuario } from "./prontuarioModel"

export type Paciente = {
  id:number,
  nome:string,
  email:string,
  convenio:string
  cpf:string,
  dataDeNascimento:string,
  telefone:string,
  endereco:endereco,
  prontuario:Prontuario
}
