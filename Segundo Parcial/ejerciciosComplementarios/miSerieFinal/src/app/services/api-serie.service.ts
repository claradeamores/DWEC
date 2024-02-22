import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serie } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ApiSerieService {
  apiUrl='https://api.tvmaze.com/shows/5';
  constructor(private http: HttpClient) { }
  getSerie(){
    return this.http.get<serie>(this.apiUrl);
  }
}
