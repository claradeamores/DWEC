import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mensaje Padre';

  mensajePadre: string = '';
  respuestaHijo: string = '';

  enviarMensaje() {
    this.respuestaHijo = '';
  }

  mostrarRespuesta(mensaje: string) {
    this.respuestaHijo = mensaje;
  }

  sendChild(tx: string) {
    this.mensajePadre = tx;
  }
}
