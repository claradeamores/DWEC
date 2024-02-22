import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/dataUsers';
import { posts } from '../models/dataPost';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url = 'https://jsonplaceholder.typicode.com/users';
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsuario(num: number){
    return this.http.get<Usuarios>(this.url + '/' + num);
  }
  getPost(){
    return this.http.get<posts[]>(this.apiUrl);
  }

}
