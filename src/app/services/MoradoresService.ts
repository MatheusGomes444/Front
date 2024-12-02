import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Morador } from '../components/model/Morador.model';

@Injectable({
  providedIn: 'root'
})
export class MoradoresService {
  private URL: string = 'http://localhost:5134/moradores';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Morador[]> {
    return this.http.get<Morador[]>(this.URL).pipe(
      catchError(error => {
        console.error('Erro ao buscar moradores:', error);
        return throwError(() => error);
      })
    );
  }

  getMoradorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/MoradorbyId/${id}`);
  }

  atualizarMorador(id: number, morador: Morador): Observable<Morador> {
    return this.http.put<Morador>(`${this.URL}/${id}`, morador).pipe(
      catchError(error => {
        console.error('Erro ao atualizar morador:', error);
        return throwError(() => error);
      })
    );
  }
}
