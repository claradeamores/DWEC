import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumenComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  serieForm: string = '';
  nombreForm: string = '';
  correoForm: string = '';
  botonOk: boolean = false;
  mostrar: boolean = false;
  mensajeError: boolean = false;
  valoracionRecibida: string = '';
  @Output()
  selected = new EventEmitter<any>();

  resumenForm() {
    if (this.correoForm != '' && this.correoForm != null) {
      this.botonOk = true;
      this.selected.emit(this.serieForm);
      this.selected.emit(this.nombreForm);
      this.selected.emit(this.correoForm);
    } else {
      this.mensajeError = true;
    }
  }

  mostrarValoracion(mensaje: string) {
    this.valoracionRecibida = mensaje;
    this.mostrar = true;
  }
}
