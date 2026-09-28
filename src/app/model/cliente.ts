export interface Cliente {
  id: number;
  cpf: string;
  nome: string;
  sobrenome: string;
  dtNascimento: string;
  email: string;
  senha?: string;
}