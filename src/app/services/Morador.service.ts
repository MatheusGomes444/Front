import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Morador } from '../components/model/Morador.model';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {
  private apiUrl = 'http://localhost:5134/api/moradores'; // URL da API ajustada

  constructor(private http: HttpClient) { }

  // Método para inserir um novo morador
  inserirMorador(morador: Morador): Observable<Morador> {
    return this.http.post<Morador>(this.apiUrl, morador);
  }

  // Método para listar todos os moradores
  listarMoradores(): Observable<Morador[]> {
    return this.http.get<Morador[]>(this.apiUrl);
  }

  // Método para atualizar um morador
  atualizarMorador(morador: Morador): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${morador.id}`, morador);
  }

  // Método para excluir um morador
  excluirMorador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para obter um morador por ID
  obterMoradorPorId(id: number): Observable<Morador> {
    return this.http.get<Morador>(`${this.apiUrl}/${id}`);
  }

  // Método para listar moradores por tipo
  listarMoradoresPorTipo(tipo: string): Observable<Morador[]> {
    return this.http.get<Morador[]>(`${this.apiUrl}/tipo/${tipo}`);
  }
}