import { cidade } from "./cidadeModel"

export type endereco = {
  id:number,
  logradouro:string,
  numero:string,
  cep:string,
  bairro:string,
  cidade:cidade,
  complemento:string
}
