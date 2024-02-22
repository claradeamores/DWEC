import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resultado } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  apiUrl='https://randomuser.me/api/';
  apiUrl1='https://randomuser.me/api/?results=10.';
  constructor(private http: HttpClient) { };
  getUno(){
    return this.http.get<resultado>(this.apiUrl);
  }
  getDiez(){
    return this.http.get<resultado>(this.apiUrl1);

  }
}
