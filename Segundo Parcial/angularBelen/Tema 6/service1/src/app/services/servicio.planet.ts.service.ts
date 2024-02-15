import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemonList } from '../model/pokemonList.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioPlanetTsService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; //'https://swapi.dev/api/planets/?page=1';

  constructor(private http: HttpClient) {}

  getpokemonList() {
    return this.http.get(this.apiUrl);
  }
  getpokemonListParam(offset: number, limit: number) {
    return this.http.get<pokemonList>(
      `${this.apiUrl}?offset=${offset}&limit=${limit}`
    );
  }

  /*getPlanets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }*/
}
