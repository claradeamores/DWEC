import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/Libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../services/libro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-libro',
  standalone: true,
  imports: [],
  templateUrl: './detalle-libro.component.html',
  styleUrl: './detalle-libro.component.css',
})
export class DetalleLibroComponent implements OnInit {
  libro: Libro = { id: 0, titulo: '', autor: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private librosService: LibroService
  ) {}

  ngOnInit(): void {
    const libroId = this.route.snapshot.params['id'];
    this.libro = this.librosService.getLibro(libroId);
  }

  volverALibros(): void {
    this.router.navigate(['/libros']);
  }
}
