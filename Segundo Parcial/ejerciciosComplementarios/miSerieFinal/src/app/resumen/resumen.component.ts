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
  titulo:string='Resumen de la solicitud';
  botonOk:boolean=false;
  mostrar:boolean=false;
  @Input()
  serieResumen:string='';
  @Input()
  correoResumen:string='';
  @Input()
  nombreResumen:string='';
  @Input()
  valoracion:string='';
  @Output()
  selected=new EventEmitter<any>();
  enviarValoracion(){
    if(this.valoracion!=''){
      this.botonOk=true;
      this.selected.emit(this.valoracion);
    }
    else{
      this.mostrar=true;
    }
  }
}
