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
  imports: [CommonModule, RouterOutlet, UserProfileComponent, AlumnoComponent, FormsModule, DatosLibroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mi_proyecto';

  nombre: string = 'Clara de Amores';

  edad: number = 42;

  texto1: string = '';

  texto2: string = '';

  getEdad(): number {
    return this.edad;
  }

  name: string = 'Búho Bonito';

  imgUrl: string = '../assets/owl-1727370_1280.jpg';

  clase: string = 'naranja';

  marcado: boolean = true;

  deshabilitado: boolean = true;

  compi: string = '';

  key: string = '';


  fraseCheck: string = '';

  hola: string = 'Hola';

  asignatura = {
    nombre: 'Cliente',

    codigo: 'DWEC',
  };


  mostrarCompi(event: any) {
    this.compi = 'Lord Giuseppe Louis Arias Parrado';
  }

  mostrar(event: any) {
    this.key = event.target.value + ', ';
  }

  mostrarMarcado(event: any) {
    if (event.target.checked) {
      this.fraseCheck = 'Está marcado';
    }
    else this.fraseCheck = 'Está desmarcado';
  }

  cambiarM(event: any) {
    this.texto2 = event.target.value.toUpperCase()
  }

  cambiarm(event: any) {
    this.texto1 = event.target.value.toLowerCase()
  }

  cambiarEstilo(event: any){
    
  }
}
