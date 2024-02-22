import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heroes } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class SuperService {
  apiUrl='https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  constructor(private http: HttpClient) { };
  getHeroe(){
    return this.http.get<heroes>(this.apiUrl);
  }
}
