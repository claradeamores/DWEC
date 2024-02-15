import { Component } from '@angular/core';
import { Articulo } from '../model/articulo';
import { ServicioArticuloService } from '../services/servicio-articulo.service';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent {
  titulo = 'Lista de artículos';
  /*
  constructor(
    private miservicio: ServicioArticuloService,
    private articuloServ: ArticuloService
  ) {
    this.articulos = this.articuloServ.articulos; // con servicio
  }*/

  // sin servicios
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

  // con servicios
  /*
  articulos: Articulo[] = [];
  */

  inputNombre: string = '';
  inputPrecio: number = 0;
  inputUnidades: number = 0;

  comprar() {
    let articuloNuevo: Articulo = {
      nombre: this.inputNombre,
      precio: this.inputPrecio,
      unidades: this.inputUnidades,
    };

    //para ejercicio de servicio:
    /*this.miservicio.muestraMensaje(
      'Nombre: ' +
        articuloNuevo.nombre +
        ', precio: ' +
        articuloNuevo.precio +
        ' ,unidades: ' +
        articuloNuevo.unidades
    );*/

    //sin servicio
    this.articulos.push(articuloNuevo);

    //con servicio
    //this.articuloServ.agregar(articuloNuevo);
  }
}
