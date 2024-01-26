import { Component } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  titulo: string = 'Componente Alumno';

  nombre: string = 'Leire';

  apellido: string = 'Casa Grande';

  edad: number = 10;

  dni: string = '25252525P';

  checkBoxMarcado: boolean = false;

  texto: string = 'Antes de pulsar';

  mostrarMensaje() {
    alert("He marcado el Checkbox");

    this.texto = 'Check Pulsado';
  }

  marcado(event: any) {

    if (event.target.value == "H") {

      this.texto = 'Pulsado Hombre';

    }
    
    else this.texto = 'Pulsado Mujer';

  }
}
