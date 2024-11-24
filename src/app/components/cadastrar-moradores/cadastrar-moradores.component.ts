import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Importa o Toastr
import { CadastrarMoradorService } from 'services/CadastrarMoradorService'; 
import { Morador } from '../model/Morador.model'; 

@Component({
  selector: 'app-cadastrar-moradores',
  templateUrl: './cadastrar-moradores.component.html',
  styleUrls: ['./cadastrar-moradores.component.css']
})
export class CadastrarMoradoresComponent implements OnInit {
  form = new FormGroup({
    Nome: new FormControl('', Validators.nullValidator),
    CPF: new FormControl('', Validators.nullValidator),
    Telefone: new FormControl('', Validators.nullValidator),
    Endereco: new FormControl('', Validators.nullValidator),
    Datanascimento: new FormControl('', Validators.nullValidator), // Corrigido
    Sexo: new FormControl('', Validators.nullValidator), // Corrigido
    Idade: new FormControl('', Validators.nullValidator), // Incluído no form
    Nacionalidade: new FormControl('', Validators.nullValidator) // Incluído no form
  });
  


  constructor(
    private router: Router,
    private toastr: ToastrService, // Injeta o serviço Toastr
    private cadastrarMoradorService: CadastrarMoradorService
  ) {}

  ngOnInit(): void {}

  cadastrarMorador(): void {
    if (this.form.valid) {
      const formValues = this.form.value;
  
      // Criar o objeto novoMorador com os valores tratados
      const novoMorador: Morador = {
        Nome: formValues.Nome ?? '', // Define valor padrão vazio se for null ou undefined
        CPF: formValues.CPF ?? '',
        Telefone: formValues.Telefone ?? '',
        Endereco: formValues.Endereco ?? '',
        Datanascimento: formValues.Datanascimento 
          ? parseInt(formValues.Datanascimento.replace(/-/g, '')) 
          : 0, // Converte para número ou usa 0 como padrão
        Sexo: formValues.Sexo ?? '',
        Idade: formValues.Idade ? parseInt(formValues.Idade) : 0, // Converte ou usa 0
        Nacionalidade: formValues.Nacionalidade ?? ''
      };
  
      this.cadastrarMoradorService.cadastrar(novoMorador).subscribe({
        next: () => {
          this.toastr.success('Morador cadastrado com sucesso!', 'Sucesso');
          this.router.navigate(['/moradores']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar morador:', err);
          this.toastr.error('Erro ao cadastrar morador. Tente novamente.', 'Erro');
        }
      });
    } else {
      this.toastr.warning('Por favor, preencha todos os campos obrigatórios.', 'Atenção');
    }
  }
  

  voltar(): void {
    this.form.reset();
  }
}
