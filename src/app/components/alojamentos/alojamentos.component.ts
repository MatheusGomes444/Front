import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alojamentos',
  templateUrl: './alojamentos.component.html',
  styleUrls: ['./alojamentos.component.css']
})
export class AlojamentosComponent implements OnInit {
  alojamentos = [
    { nome: 'Alojamento 1', numeroMoradores: 4, localizacao: 'Rua 1', descricao: 'Descrição do alojamento 1' },
    { nome: 'Alojamento 2', numeroMoradores: 3, localizacao: 'Rua 2', descricao: 'Descrição do alojamento 2' },
    { nome: 'Alojamento 3', numeroMoradores: 5, localizacao: 'Rua 3', descricao: 'Descrição do alojamento 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
