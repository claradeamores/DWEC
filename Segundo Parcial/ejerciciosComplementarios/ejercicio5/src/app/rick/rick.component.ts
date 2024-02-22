import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajesListService } from '../services/personajes-list.service';
import { CommonModule } from '@angular/common';
import { rick } from '../models/dataModel';

@Component({
  selector: 'app-rick',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick.component.html',
  styleUrl: './rick.component.css'
})
export class RickComponent {
  title: string = 'Personajes Rick Y Morti';
  mostrar: boolean = false;
  personajes?:Observable<rick>;
  constructor(private obtenerPersonaje: PersonajesListService) {}
  mostrarPersonajes() {
    this.personajes = this.obtenerPersonaje.getPersonajes();
    this.mostrar = true;
  }
}
