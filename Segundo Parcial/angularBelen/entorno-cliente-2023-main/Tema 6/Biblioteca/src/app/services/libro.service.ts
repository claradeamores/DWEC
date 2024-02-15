import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private libros: Libro[] = [
    { id: 1, titulo: 'Libro 1', autor: 'Autor 1' },
    { id: 2, titulo: 'Libro 2', autor: 'Autor 2' },
    { id: 3, titulo: 'Libro 3', autor: 'Autor 3' },
    { id: 4, titulo: 'Libro 4', autor: 'Autor 4' },
  ];

  getLibros(): Libro[] {
    return this.libros;
  }

  addLibro(nuevoLibro: Libro) {
    const ids = this.libros.map((obj) => obj.id);

    // Utilizamos Math.max() para obtener el mayor ID
    const mayorId = Math.max(...ids);
    nuevoLibro.id = mayorId + 1;
    this.libros.push(nuevoLibro);
  }

  getLibro(id: number): Libro {
    return this.libros[id - 1];
  }

  modificarLibro(nuevoLibro: Libro) {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id === nuevoLibro.id) {
        this.libros[i].autor = nuevoLibro.autor;
        this.libros[i].titulo = nuevoLibro.titulo;
        break; // Se encontró el objeto, termina la búsqueda
      }
    }
  }
}
