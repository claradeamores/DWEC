import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet, PlanetList } from '../model/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  private apiUrl = 'https://swapi.dev/api/planets';
  constructor(private http: HttpClient) {}

  getPlanets(page: number = 1): Observable<PlanetList> {
    return this.http.get<PlanetList>(`${this.apiUrl}?page=${page}`);
  }

  getPlaneta(num: number = 1): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/${num}`);
  }
}
