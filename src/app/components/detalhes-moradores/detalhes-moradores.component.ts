import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-moradores',
  templateUrl: './detalhes-moradores.component.html',
  styleUrls: ['./detalhes-moradores.component.css']
})
export class DetalhesMoradoresComponent implements OnInit {
  morador = {
    nome: 'João Silva',
    dataNascimento: '1990-01-01',
    idade: 32,
    cpf: '12345678909',
    rg: '987654321',
    status: 'Ativo',
    nacionalidade: 'Brasileiro',
    sexo: 'Masculino',
    albergue: 'Albergue 1',
    observacao: 'Observação do morador'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
