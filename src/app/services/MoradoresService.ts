// moradores.service.ts
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoradoresComponent } from '../components/moradores/moradores.component'; // Certifique-se de que você tem um modelo para Morador
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoradoresService {
  private URL: string = 'http://localhost:5134/moradores';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<MoradoresService[]> {
    return this.http.get<MoradoresService[]>(this.URL).pipe(
      catchError(erro => {
        console.error('Erro ao buscar moradores', erro);
        return [];
      })
    );
  }
  // Busca morador por ID
  getMoradorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/MoradorbyId${id}`);
}
cadastrarMorador(morador: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const options = { headers: headers };

  return this.http.post(`${this.URL}/moradores`, morador, options);
}
}
