// moradores.component.ts

import { Component } from "@angular/core";

interface Morador {
  cpf: string;
  nome: string;
  albergue: string;
}

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent {
  moradores: Morador[] = [
    { cpf: '12345678909', nome: 'João Silva', albergue: 'Albergue 1' },
    { cpf: '98765432109', nome: 'Maria Rodrigues', albergue: 'Albergue 2' },
    { cpf: '11122233344', nome: 'José Oliveira', albergue: 'Albergue 3' },
    // ...
  ];

  verDetalhes(morador: Morador) {
    console.log(`Detalhes do morador ${morador.nome}`);
    // implementar lógica para mostrar detalhes do morador
  }
}
