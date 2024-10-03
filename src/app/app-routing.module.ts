import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProdutosComponent } from './components/produtos/lista-produtos/lista-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarMoradoresComponent } from './components/cadastrar-moradores/cadastrar-moradores.component';
import { AlojamentosComponent } from './components/alojamentos/alojamentos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'cadastrarmoradores', component: CadastrarMoradoresComponent },
  { path: 'alojamento', component: AlojamentosComponent },
  {path:'produtos', component:ListaProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutosComponent},
  {path:'produtos/atualizar/:id', component: AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
