export interface Morador {
  nome: string;
  sobrenome: string;
  rg: string;
  cpf: string;
  dataNascimento: string; // ou Date, dependendo de como a API espera
  sexo: string;
  telefone: string;
  endereco: string;
  email: string;
  nacionalidade?: string; // Se for opcional
  idade?: number; // Se for opcional
id: number;
}