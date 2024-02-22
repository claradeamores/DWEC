import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { factsList } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class FactsListService {
  apiUrl='https://cat-fact.herokuapp.com/facts';
  constructor(private http: HttpClient) { };
  getFacts(){
    return this.http.get<factsList[]>(this.apiUrl);
  }
}
