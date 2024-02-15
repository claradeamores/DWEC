import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { AnillosService } from '../services/anillos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css',
})
export class ListPersonajeComponent implements OnInit {
  personajes?: Personaje[];

  constructor(private anillosService: AnillosService) {}

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.personajes = this.anillosService.getPersonajes();
  }

  eliminarPersonaje(id: number): void {
    this.anillosService.eliminarPersonaje(id);
    this.getPersonajes();
  }
}
