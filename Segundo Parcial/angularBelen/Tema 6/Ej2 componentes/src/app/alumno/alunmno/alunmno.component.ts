import { Component } from '@angular/core';

@Component({
  selector: 'app-alunmno',
  templateUrl: './alunmno.component.html',
  styleUrls: ['./alunmno.component.css'],
})
export class AlunmnoComponent {
  title: string = 'Componente ALumno';

  nombre: string = 'Luis';
  apellidos: string = 'Lopez Rueda';
  dni: string = '77777777S';
  edad: number = 20;

  deshabilitado: boolean = true;

  check2Marcado: boolean = false;

  mostrarMensaje() {
    alert('Check2 tocado');
    this.texto = 'Check pulsado';
  }

  texto: string = 'Antes de pulsar';

  marcado(event: any) {
    if (event.target.value == 'H') {
      this.texto = 'Pulsado Hombre';
    } else this.texto = 'Pulsado Mujer';
  }
  /*
  marcado(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'H')
      this.texto = 'Pulsado Hombre';
    else this.texto = 'Pulsado Mujer';
  }*/
}
