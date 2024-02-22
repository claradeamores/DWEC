import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { location } from '../models/dataModel';
import { LocalizacionesListService } from '../services/localizaciones-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css'
})
export class LocalizacionComponent implements OnInit{
  title: string = 'Localizaciones de Rick y Morty';
  localizaciones?:Observable<location>;
  constructor(private obtenereLocalizacion: LocalizacionesListService) {}
  ngOnInit(): void {
    this.localizaciones=this.obtenereLocalizacion.getLocalizaciones();
  }
}
