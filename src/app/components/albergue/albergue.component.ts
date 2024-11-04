import { Component } from '@angular/core';

@Component({
  selector: 'app-albergue',
  templateUrl: './albergue.component.html',
  styleUrls: ['./albergue.component.css']
})
export class AlbergueComponent {
  showList: boolean = false; // Controle de exibição da lista
  contribuintes: string[] = ['Contribuinte 1', 'Contribuinte 2', 'Contribuinte 3']; // Lista de contribuentes

  showContribuintes() {
    this.showList = !this.showList; // Alterna a exibição da lista
  }
}