import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioArticuloService {
  constructor() {}

  muestraMensaje(mensaje: string) {
    alert(mensaje);
  }
}
