import { Injectable } from '@angular/core';
import { episodios } from '../models/dataModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosListService {
  apiUrl = 'https://rickandmortyapi.com/api/episode';
  constructor(private http: HttpClient) { };
  getepisodios() {
    return this.http.get<episodios>(this.apiUrl);
  }
}
