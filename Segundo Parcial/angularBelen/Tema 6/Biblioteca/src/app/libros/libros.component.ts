import { Component } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../model/Libro';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent {
  libros: Libro[];
  constructor(private servicio: LibroService, private router: Router) {
    this.libros = this.servicio.getLibros();
  }

  altaLibro() {
    this.router.navigate(['/libroNuevo']);
  }
}
