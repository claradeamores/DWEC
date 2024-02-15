import { Injectable } from '@angular/core';
import { Articulo } from '../model/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor() {}

  articulos: Articulo[] = [
    {
      nombre: 'Lápiz',
      precio: 0.65,
      unidades: 5,
    },
    {
      nombre: 'Cuaderno',
      precio: 2,
      unidades: 3,
    },
    {
      nombre: 'Tijeras',
      precio: 3.5,
      unidades: 2,
    },
  ];

  agregar(articulo: Articulo) {
    this.articulos.push(articulo);
  }
}
