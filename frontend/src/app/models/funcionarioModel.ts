import { endereco } from "./enderecoModel"
import { especialidade } from "./especialidadeModel"

export type funcionario = {
  id:number
  nome:string,
  email:string,
  crm:string,
  dataDeAdmissao:string,
  dataDeDemissao:string,
  especialidade:especialidade,
  cpf:string,
  telefone:string,
  endereco:endereco,
  perfis:string

}
