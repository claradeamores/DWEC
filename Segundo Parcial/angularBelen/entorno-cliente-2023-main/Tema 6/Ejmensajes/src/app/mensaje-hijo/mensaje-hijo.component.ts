import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mensaje-hijo',
  templateUrl: './mensaje-hijo.component.html',
  styleUrls: ['./mensaje-hijo.component.css'],
})
export class MensajeHijoComponent {
  @Input()
  mensajeHijo: string = '';

  @Output()
  selected = new EventEmitter<any>();

  respuesta: string = '';
  enviarRespuesta() {
    this.selected.emit(this.respuesta);
  }
}
