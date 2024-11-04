import { Component } from '@angular/core';

@Component({
  selector: 'app-detalhes-alojamento',
  templateUrl: './detalhes-alojamento.component.html',
  styleUrls: ['./detalhes-alojamento.component.css']
})
export class DetalhesAlojamentoComponent {
  nomeAlojamento: string = 'Nome do Alojamento';
  imagemAlojamento: string = 'url-da-imagem.jpg'; // Substitua pela URL da imagem
  escolhaPet: string = '';
  escolhaSexo: string = '';
  areaLazer: boolean = false;
  pertences: boolean = false;
  refeicoes: boolean = false;
  escolhaHorario: string = '';
  acolhimento: boolean = false;
  programas: boolean = false;
}