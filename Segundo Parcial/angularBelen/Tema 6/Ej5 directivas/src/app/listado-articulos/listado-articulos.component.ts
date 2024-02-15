import { Component, Input } from '@angular/core';
import { Articulo } from '../model/articulo';
import { ServicioArticuloService } from '../services/servicio-articulo.service';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css'],
})
export class ListadoArticulosComponent {
  @Input()
  articuloIndividual: any;

  @Input()
  indice: any;

  //constructor(private miservicio: ServicioArticuloService) {}

  arrayCaracteristica = [''];

  agregarCaracteristicas(nuevaCaracteristica: string) {
    //this.miservicio.muestraMensaje(nuevaCaracteristica);

    this.arrayCaracteristica.push(nuevaCaracteristica);
  }
}
