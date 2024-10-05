import { Component, OnInit } from "@angular/core";

interface Alojamento {
  nome: string;
  numeroMoradores: number;
  localizacao: string;
  descricao: string;
}

@Component({
  selector: 'app-alojamentos',
  templateUrl: './alojamentos.component.html',
  styleUrls: ['./alojamentos.component.css']
})
export class AlojamentosComponent implements OnInit {
  alojamentos: Alojamento[] = [
    { nome: 'Alojamento 1', numeroMoradores: 4, localizacao: 'Rua 1', descricao: 'Descrição do alojamento 1' },
    { nome: 'Alojamento 2', numeroMoradores: 3, localizacao: 'Rua 2', descricao: 'Descrição do alojamento 2' },
    { nome: 'Alojamento 3', numeroMoradores: 5, localizacao: 'Rua 3', descricao: 'Descrição do alojamento 3' }
  ];

  detalhesAlojamento: Alojamento | null = null;

  verDetalhes(alojamento: Alojamento) {
    this.detalhesAlojamento = alojamento;
  }

  constructor() { }

  ngOnInit(): void {
  }
}