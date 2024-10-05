import { AlojamentosComponent } from './components/alojamentos/alojamentos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProdutosComponent } from './components/produtos/lista-produtos/lista-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarMoradoresComponent } from './components/cadastrar-moradores/cadastrar-moradores.component';
import { MoradoresComponent } from './components/moradores/moradores.component';
import { DetalhesMoradoresComponent } from './components/detalhes-moradores/detalhes-moradores.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'alojamentos', component: AlojamentosComponent},
  {path: 'detalhesmoradores', component: DetalhesMoradoresComponent},
  {path: 'moradores', component: MoradoresComponent},
  { path: 'cadastrarmoradores', component: CadastrarMoradoresComponent },
  {path:'produtos', component:ListaProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutosComponent},
  {path:'produtos/atualizar/:id', component: AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
