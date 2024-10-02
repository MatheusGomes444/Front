import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-moradores',
  templateUrl: './cadastrar-moradores.component.html',
  styleUrls: ['./cadastrar-moradores.component.css']
})
export class CadastrarMoradoresComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }

  cadastrarMorador(): void {
    console.log(this.form.value);
    // Aqui você pode fazer a lógica para salvar os dados no banco de dados
  }
}
