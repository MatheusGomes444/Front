import { Component } from '@angular/core';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent {
  moradores: any[] = [];

  constructor() {
    // Carregar moradores do localStorage
    this.moradores = JSON.parse(localStorage.getItem('moradores') || '[]');
  }

  novoMorador() {
    // Lógica para criar um novo morador (pode ser um redirecionamento ou abertura de um modal)
  }

  detalhesAlojamento(morador: any) {
    // Lógica para exibir detalhes do alojamento do morador
    console.log('Detalhes do morador:', morador);
  }

  localizacao(morador: any) {
    // Lógica para exibir localização do morador
    console.log('Localização do morador:', morador);
  }
}
