// moradores.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoradoresComponent } from '../components/moradores/moradores.component'; // Certifique-se de que você tem um modelo para Morador

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
}