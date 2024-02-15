import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserProfileComponent,
    AlumnoComponent,
    FormsModule,
    DatosLibroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase de Angular';

  nombre: string = 'Monkey D. Luffy';

  imgUrl: string = '../assets/cat-8415620_1280.jpg';

  edad: number = 25;

  name: string = 'Clara de Amores';

  imgUrl1: string = '../assets/red-panda-8372704_640.jpg';

  imgUrl2: string = '../assets/animals-7696695_640.jpg';

  naranja: string = 'naranja';

  marcado: boolean = true;

  deshabilitado: boolean = true;

  companero: string = '';

  key: string = '';

  checkboxState: boolean = false;

  asignatura = {
    nombre: 'DWEC',
    codigo: 1234,
  };

  getEdad() {
    return this.edad;
  }

  getCompanero(event: any) {
    this.companero = 'María Ramos';
  }

  getLabel(event: any) {
    this.key = event.target.value + ', ';
  }
  frase: string = '';

  mostrarMarcado(event: any) {
    if (event.target.checked) {
      this.frase = 'CheckBox marcado';
    } else {
      this.frase = 'CheckBox desmarcado';
    }
  }
  textoOne: string = '';
  mostrarOne(event: any) {
    this.textoOne = event.target.value;
  }
  texto1: string = '';
  texto2: string = '';
  cambiarM(event: any) {
    this.texto2 = event.target.value.toUpperCase();
  }

  cambiarm(event: any) {
    this.texto1 = event.target.value.toLowerCase();
  }
  conFondo: string = '';
  atribHref='http://ceuandalucia.es';
  mostrarCapa: boolean = true;
  cambiarValor() {
    this.mostrarCapa = !this.mostrarCapa;
  }
  habilitaBoton: boolean = true;


  }

