import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { breedList } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class BreedListService {
  apiUrl = 'https://catfact.ninja/breeds';
  constructor(private http: HttpClient) { };
  getRazas() {
    return this.http.get<breedList>(this.apiUrl);
  }
}
