import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoradorService } from 'src/app/services/morador.service';
import { Morador } from '../model/Morador.model';

@Component({
  selector: 'app-cadastrar-moradores',
  templateUrl: './cadastrar-moradores.component.html',
  styleUrls: ['./cadastrar-moradores.component.css']
})
export class CadastrarMoradoresComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private moradorService: MoradorService) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nacionalidade: [''], // Opcional
      idade: [''] // Opcional
    });
  }

  ngOnInit(): void {}
  salvar() {
    if (this.form.valid) {
      const morador: Morador = {
        id: 0, // ou null, dependendo da sua lógica
        nome: this.form.value.nome,
        sobrenome: this.form.value.sobrenome,
        rg: this.form.value.rg,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento,
        sexo: this.form.value.sexo,
        telefone: this.form.value.telefone,
        endereco: this.form.value.endereco,
        email: this.form.value.email,
        nacionalidade: this.form.value.nacionalidade,
        idade: this.form.value.idade ? +this.form.value.idade : undefined // Converte para número, se existir
      };
  
      this.moradorService.inserirMorador(morador).subscribe({
        next: (response) => {
          console.log('Morador salvo com sucesso!', response);
        },
        error: (error) => {
          console.error('Erro ao salvar morador', error);
        },
        complete: () => {
          console.log('Operação completa');
        }
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  voltar() {
    // Lógica para voltar
  }
}