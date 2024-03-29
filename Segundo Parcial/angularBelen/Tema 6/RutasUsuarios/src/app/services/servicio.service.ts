import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/usuarios.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUsuario(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }
}
