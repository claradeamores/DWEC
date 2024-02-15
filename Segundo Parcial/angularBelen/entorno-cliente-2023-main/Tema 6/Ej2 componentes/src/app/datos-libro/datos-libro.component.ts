import { NumberSymbol } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Libro {
  titulo: string;
  autor: string;
  precio: string;
  stock: number;
  cantidad: number;
  imagen: string;
}

@Component({
  selector: 'app-datos-libro',
  templateUrl: './datos-libro.component.html',
  styleUrls: ['./datos-libro.component.css'],
})
export class DatosLibroComponent {
  libro = {
    titulo: 'El señor de los anillos',
    autor: 'Tolkien',
    precio: 21.3,
    stock: 5,
    cantidad: 0,
    imagen: '../assets/anillos.jpg',
  };

  libro2 = {
    titulo: 'La armadura de la lluz',
    autor: 'Ken Follet',
    precio: 23.5,
    stock: 10,
    cantidad: 2,
    imagen: '../assets/anillos.jpg',
  };

  libros: any[] = [this.libro, this.libro2];

  @Input() numLibro: string = '';

  @Output()
  selected = new EventEmitter<any>();

  @Output()
  selected2 = new EventEmitter<Libro>();

  up() {
    this.libro.cantidad++;
  }
  down() {
    this.libro.cantidad--;
  }
  coord(event: any) {
    console.log(event.clientX + ',' + event.clientY);
  }

  devolverTitulo() {
    let numero: number = Number(this.numLibro);
    let tit;
    if (numero == 2 || numero == 1) {
      tit = this.libros[numero - 1].titulo;
      console.log(tit);
    } else {
      tit = 'No existe dicho libro';
    }
    this.selected.emit(tit);
  }

  devolverTitulo2() {
    
    let numero: number = Number(this.numLibro);
    this.selected2.emit(this.libros[numero - 1]);
  }
}
