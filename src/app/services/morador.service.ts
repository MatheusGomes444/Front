import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private apiUrl = ' http://localhost:5134';

  constructor(private http: HttpClient) { }

  cadastrarMorador(morador: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.http.post(`${this.apiUrl}/moradores`, morador, options);
  }
  // Você pode adicionar outros métodos para obter, atualizar e deletar moradores...
}
