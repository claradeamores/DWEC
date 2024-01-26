import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-libro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css'
})
export class DatosLibroComponent {

  libro = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    precio: 15.95,
    stock: 0,
    cantidad: 0,
    imagen: '../assets/principito.jpg'
  }
  up() {
    this.libro.cantidad++;
  }
  down() {
    this.libro.cantidad--;
  }
}
