import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../models/data';
import { ServicioSerieService } from '../services/servicio-serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent implements OnInit{
  series$?= new Observable<Serie>;
  constructor(private obtenerSerie: ServicioSerieService){};
  ngOnInit():void {
    this.series$=this.obtenerSerie.getSerie();
  }
;


}
