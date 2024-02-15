import { Component } from '@angular/core';
import { Logger } from './services/logger.service';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Alta de usuario';
  mensaje = '';
  alta = false;

  nombre = '';
  apellidos = '';

  registrar() {
    this.mensaje =
      'Alta correcta del usuario ' + this.nombre + ' ' + this.apellidos;
    this.alta = true;
  }

  personas: Persona[] = [
    {
      nombre: 'Pepe',
      apellidos: 'Lopez',
      edad: 35,
    },
    {
      nombre: 'Rosa',
      apellidos: 'Torres',
      edad: 16,
    },
  ];

  opcion: string = 'No ha seleccionado ningún botón';

  per: Persona = {
    nombre: '',
    apellidos: '',
    edad: 0,
  };
  //const invoiceObjectDefault: IInvoice = new Invoice();

  constructor(private logger: Logger) {
    this.logger.log('constructor');
  }
  mostrarPersona(persona: Persona) {
    this.logger.log('muestro persona');
    this.per = persona;
  }

  //otra forma
  personaMayor = this.personas.filter((persona) => persona.edad > 30);

  get personasMayoresDe30() {
    return this.personas.filter((persona) => persona.edad > 30);
  }

  marcar(event: any) {
    this.opcion = event.target.innerHTML;
  }
}
