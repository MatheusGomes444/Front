import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoradoresService } from 'src/app/services/MoradoresService'; 

@Component({
  selector: 'app-detalhes-moradores',
  templateUrl: './detalhes-moradores.component.html',
  styleUrls: ['./detalhes-moradores.component.css']
})
export class DetalhesMoradoresComponent implements OnInit {
  morador: any; // Dados do morador

  constructor(
    private route: ActivatedRoute,
    private moradoresService: MoradoresService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.moradoresService.getMoradorById(id).subscribe(data => {
      this.morador = data;
    });
  }
}
