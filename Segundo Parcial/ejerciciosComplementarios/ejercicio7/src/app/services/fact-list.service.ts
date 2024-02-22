import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { factList } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class FactListService {
  apiUrl = 'https://catfact.ninja/fact?max_length';
  constructor(private http: HttpClient) {}
  getFrase(num: number) {
    return this.http.get<factList>(this.apiUrl + '=' + num);
  }
}
