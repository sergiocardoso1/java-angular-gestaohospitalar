import { endereco } from "./enderecoModel"
import { especialidade } from "./especialidadeModel"

export type funcionarioNewDTO = {
  nome:string,
  email:string,
  crm:string,
  senha:string,
  dataDeAdmissao:string,
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
