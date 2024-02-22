import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  @Input()
  serieResumen: string = '';
  @Input()
  correoResumen: string = '';
  @Input()
  nombreResumen: string = '';
  @Input()
  valoracionResumen: string = '';

  @Output()
  selected = new EventEmitter<string>();
  errorValoracion:boolean=true;


  enviarValoracion() {
    if(this.valoracionResumen==''){
      this.errorValoracion=true;
    }
    else{
      this.selected.emit(this.valoracionResumen);
      this.errorValoracion=false;
    }
  }
}
