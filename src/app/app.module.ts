
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListaProdutosComponent } from './components/produtos/lista-produtos/lista-produtos.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarMoradoresComponent } from './components/cadastrar-moradores/cadastrar-moradores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlojamentosComponent } from './components/alojamentos/alojamentos.component';
// PIPES: https://angular.io/guide/pipes

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MoradoresComponent } from './components/moradores/moradores.component';
import { DetalhesMoradoresComponent } from './components/detalhes-moradores/detalhes-moradores.component';
import { AlbergueComponent } from './components/albergue/albergue.component';






registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaProdutosComponent,
    CadastrarProdutosComponent,
    HomeComponent,
    AtualizarProdutoComponent,
    CadastrarMoradoresComponent,
    AlojamentosComponent,
    MoradoresComponent,
    DetalhesMoradoresComponent,
    AlbergueComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },

],


  //providers: [],
  bootstrap: [AppComponent] // AppComponent ele é chamado  do bootstrap


})
export class AppModule { }
