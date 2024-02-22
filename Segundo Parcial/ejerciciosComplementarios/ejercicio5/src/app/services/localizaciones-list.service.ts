import { Injectable } from '@angular/core';
import { location } from '../models/dataModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionesListService {
  apiUrl = 'https://rickandmortyapi.com/api/location';
  constructor(private http: HttpClient) { };
  getLocalizaciones() {
    return this.http.get<location>(this.apiUrl);
  }
}
