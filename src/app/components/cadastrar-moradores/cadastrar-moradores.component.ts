import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-moradores',
  templateUrl: './cadastrar-moradores.component.html',
  styleUrls: ['./cadastrar-moradores.component.css']
})
export class CadastrarMoradoresComponent implements OnInit {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    rg: new FormControl('', Validators.required),
    CPF: new FormControl('', Validators.required),
    dtnscimento: new FormControl('', Validators.required),
    Sexo: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarMorador() {
    // Recupera a lista de moradores do localStorage
    const moradores = JSON.parse(localStorage.getItem('moradores') || '[]');

    // Adiciona o novo morador à lista
    moradores.push(this.form.value);

    // Salva a lista atualizada no localStorage
    localStorage.setItem('moradores', JSON.stringify(moradores));

    // Redireciona para a página de moradores
    this.router.navigate(['/moradores']);
  }

  voltar() {
    this.router.navigate(['/moradores']);
  }
}
