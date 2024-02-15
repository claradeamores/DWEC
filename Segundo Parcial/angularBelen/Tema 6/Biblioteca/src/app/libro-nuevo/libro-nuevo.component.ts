import { Component } from '@angular/core';
import { Libro } from '../model/Libro';
import { FormsModule } from '@angular/forms';
import { LibroService } from '../services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css',
})
export class LibroNuevoComponent {
  nuevoLibro: Libro = { id: 0, titulo: '', autor: '' };

  constructor(private servicio: LibroService, private router: Router) {}

  addLibro() {
    this.servicio.addLibro(this.nuevoLibro);
    this.router.navigate(['/libros']);
  }

  volver() {
    this.router.navigate(['/libros']);
  }
}
