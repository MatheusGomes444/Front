// moradores.component.ts
import { Component, OnInit } from '@angular/core';
import { MoradoresService } from 'services/MoradoresService'; // Ajuste o caminho conforme necessário
import { Morador } from '../model/Morador.model'; // Certifique-se de que você tem um modelo para Morador

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent implements OnInit {
  moradores: Morador[] = [];

  constructor(private moradoresService: MoradoresService) { }

  ngOnInit(): void {
    this.carregarMoradores();
  }

  carregarMoradores(): void {
    this.moradoresService.buscarTodos().subscribe(data => {
      this.moradores = data;
    });
  }

  verDetalhes(morador: Morador): void {
    console.log(`Detalhes do morador ${morador.nome}`);
    // implementar lógica para mostrar detalhes do morador
  }
}