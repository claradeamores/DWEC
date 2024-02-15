import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../model/Libro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-modificacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-modificacion.component.html',
  styleUrl: './libro-modificacion.component.css',
})
export class LibroModificacionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private servicio: LibroService,
    private router: Router
  ) {}
  libro: Libro = { id: 0, titulo: '', autor: '' };

  ngOnInit(): void {
    const libroId = this.route.snapshot.params['id'];
    this.libro = this.servicio.getLibro(libroId);
  }
  modificar() {
    this.servicio.modificarLibro(this.libro);
    this.router.navigate(['/libros']);
  }

  volver() {
    this.router.navigate(['/libros']);
  }
}
