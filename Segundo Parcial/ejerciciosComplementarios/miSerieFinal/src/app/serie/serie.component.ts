import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { serie } from '../models/data';
import { ApiSerieService } from '../services/api-serie.service';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent implements OnInit{
  titulo:string='Serie';
  series$?:Observable<serie>;
  constructor (private obtenerSerie: ApiSerieService){}
  ngOnInit(): void {
    this.series$=this.obtenerSerie.getSerie();
  }

}
