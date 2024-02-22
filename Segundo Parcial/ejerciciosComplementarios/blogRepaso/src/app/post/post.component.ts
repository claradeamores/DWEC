import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { posts } from '../models/dataPost';
import { ApiDataService } from '../services/api-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent{
  posts$?:Observable<posts[]>;
  constructor (private obtenerPost: ApiDataService){};
  botonOk:boolean=false;
  mostrarPost(){
    this.posts$=this.obtenerPost.getPost();
    this.botonOk=true;

  }
;
}
