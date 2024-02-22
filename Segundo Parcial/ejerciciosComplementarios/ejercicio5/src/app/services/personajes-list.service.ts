import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rick } from '../models/dataModel';
@Injectable({
  providedIn: 'root'
})
export class PersonajesListService {
  apiUrl = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) { };
  getPersonajes() {
    return this.http.get<rick>(this.apiUrl);
  }
}
