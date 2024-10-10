import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alojamentos',
  templateUrl: './alojamentos.component.html',
  styleUrls: ['./alojamentos.component.css']
})
export class AlojamentosComponent implements OnInit {
  alojamentos = [
    { nome: 'Jaçana', numeroMoradores: 50, descricao: 'Descrição do alojamento 1' },
    { nome: 'Mooca', numeroMoradores: 3, descricao: 'Descrição do alojamento 2' },
    { nome: 'Tremenbé', numeroMoradores: 5, descricao: 'Descrição do alojamento 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
