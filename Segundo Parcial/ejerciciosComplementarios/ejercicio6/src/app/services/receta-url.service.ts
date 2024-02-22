import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { receta } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class RecetaUrlService {
  apiurl='https://www.themealdb.com/api/json/v1/1/random.php';
  constructor(private http: HttpClient) { };
  getRecetas(){
    return this.http.get<receta>(this.apiurl);
  }
}
