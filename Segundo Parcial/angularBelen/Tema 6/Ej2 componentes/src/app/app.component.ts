import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import {
  DatosLibroComponent,
  Libro,
} from './datos-libro/datos-libro.component';

@Component({
  selector: 'app-hola',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Clases de angular';

  name = 'Belén';
  imgUrl = './assets/imagen.jpg';
  naranja = 'naranja';
  marcado: boolean = true;
  deshabilitado: boolean = true;
  asignatura = {
    nombre: 'Desarrollo web en entorno cliente',
    codigo: 'DWEC',
  };

  compi: string = '';
  setName() {
    this.compi = 'Lucas';
  }

  key: string = '';

  mostrar(event: any) {
    this.key += event.target.value + ',';
  }

  fraseCheck: string = '';

  mostrarMarcado(event: any) {
    if (event.target.checked) this.fraseCheck = 'Está marcado';
    else this.fraseCheck = 'No está marcado';
  }

  gender: string = '';

  capturar(event: any) {
    this.texto = event.target.value;
  }

  texto: string = '';

  texto1: string = '';
  texto2: string = '';
  cambiarM(event: any) {
    this.texto2 = event.target.value.toUpperCase();
  }

  cambiarm(event: any) {
    this.texto1 = event.target.value.toLowerCase();
  }

  conFondo: string = '';

  atribHref: string = 'https://ceuandalucia.es';

  mostrarCapa: boolean = true;
  cambiarValor() {
    this.mostrarCapa = !this.mostrarCapa;
  }

  habilitaBoton: boolean = true;

  valorHijo: string = '';

  numLibro: string = '';
  tituloLibro: string = '';

  seleccionarPadre(nombre: string) {
    console.log('PADRE: ' + nombre);
    this.valorHijo = nombre;
  }

  mostrarTitulo(titulo: string) {
    this.tituloLibro = '';
    alert(titulo);
    console.log('El titulo es: ' + titulo);
    this.tituloLibro = titulo;
  }

  mostrarTitulo2(tit: Libro) {
    if (tit == null) {
      this.tituloLibro = 'No existe el libro';
    } else {
      this.tituloLibro = tit.titulo;
    }
  }
}
