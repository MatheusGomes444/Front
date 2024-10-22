// cadastrar-moradores.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastrarMoradorService } from 'services/CadastrarMoradorService'; // Ajuste o caminho conforme necessário
import { Morador } from '../model/Morador.model'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-cadastrar-moradores',
  templateUrl: './cadastrar-moradores.component.html',
  styleUrls: ['./cadastrar-moradores.component.css']
})
export class CadastrarMoradoresComponent implements OnInit {
  form!: FormGroup;

  constructor(private cadastrarMoradorService: CadastrarMoradorService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required) // Adicione o CPF se necessário
    });
  }

  cadastrarMorador(): void {
    if (this.form.valid) {
      const novoMorador: Morador = this.form.value;

      this.cadastrarMoradorService.cadastrar(novoMorador).subscribe(
        response => {
          console.log('Morador cadastrado com sucesso', response);
          // Aqui você pode redirecionar para a lista de moradores ou mostrar uma mensagem de sucesso
        },
        error => {
          console.error('Erro ao cadastrar morador', error);
          // Aqui você pode mostrar uma mensagem de erro
        }
      );
    } else {
      console.error('Formulário inválido');
      // Aqui você pode mostrar uma mensagem de validação
    }
  }
}