import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-articulo',
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrls: ['./caracteristicas-articulo.component.css'],
})
export class CaracteristicasArticuloComponent {
  @Output()
  caracteristica = new EventEmitter<string>();

  anadir(valor: string) {
    this.caracteristica.emit(valor);
  }
}
