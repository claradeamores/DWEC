import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../app.component';
import { Logger } from '../services/logger.service';
import { Logger2 } from '../services/logger2.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
  providers: [
    { provide: Logger, useClass: Logger2 }, //2. cuado pidan logger, voy a utilizar logger2.
  ],
})
export class ListadoPersonasComponent {
  @Input()
  persona: any;

  @Output()
  selected = new EventEmitter<Persona>();

  constructor(private logger: Logger) {
    this.logger.log('constructor');
  }

  marcarPersona() {
    this.logger.log('Voy a avisar al componente padre');
    this.selected.emit(this.persona);
  }

  esMenor(): boolean {
    return this.persona.edad < 18;
  }
}
