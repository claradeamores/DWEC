import { Component } from '@angular/core';
import { Personaje } from '../model/personaje';
import { AnillosService } from '../services/anillos.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css',
})
export class AddPersonajeComponent {
  nuevoPersonaje: Personaje = { id: 0, nombre: '', raza: '' };

  constructor(private anillosService: AnillosService) {}

  agregarPersonaje(): void {
    if (this.nuevoPersonaje.nombre && this.nuevoPersonaje.raza) {
      this.nuevoPersonaje.id = this.anillosService.getPersonajes().length + 1;
      this.anillosService.agregarPersonaje(this.nuevoPersonaje);
      this.nuevoPersonaje = { id: 0, nombre: '', raza: '' };
    }
  }
}
