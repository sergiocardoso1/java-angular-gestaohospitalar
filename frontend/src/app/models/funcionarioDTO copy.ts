import { endereco } from "./enderecoModel"
import { especialidade } from "./especialidadeModel"

export type funcionarioDTO = {
  id:number,
  nome:string,
  email:string,
  crm:string,
  dataDeAdmissao:string,
  dataDeDemissao:string,
  especialidade:number,
  telefone:string,
  logradouro:string,
  cep:string,
  complemento:string,
  numero:string,
  bairro:string,
  cidade:string,
  estado:string,
  perfis:number

}
