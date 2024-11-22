import { Component } from '@angular/core';
import { MoradoresService } from 'services/MoradoresService';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent {
  moradores: any[] = []; // Lista completa de moradores
  filteredMoradores: any[] = []; // Lista filtrada de moradores
  searchTerm: string = ''; // Termo de busca

  constructor(private moradoresService: MoradoresService) { }

  ngOnInit(): void {
    this.carregarMoradores();

  }
  carregarMoradores(): void {
    this.moradoresService.buscarTodos().subscribe(data => {
      this.moradores = data;
    });
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

  onSearch() {
    // Filtra a lista de moradores com base no termo de busca
    this.filteredMoradores = this.moradores.filter(morador => 
      morador.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}