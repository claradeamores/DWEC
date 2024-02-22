import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumenComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
titulo:string='Formulario de Valoración';
serieFormulario:string='';
correoFormulario:string='';
nombreFormulario:string='';
rojo:string='rojo';
verde:string='verde';
botonOk:boolean=false;
mostrar:boolean=false;
valoracionRecibida:string='';
mostrarVal:boolean=false;
@Output()
selected=new EventEmitter<any>();
mostrarResumen(){
  if(this.correoFormulario!=''){
    this.botonOk=true;
    this.selected.emit(this.nombreFormulario);
    this.selected.emit(this.correoFormulario);
    this.selected.emit(this.serieFormulario);
  }
  else{
    this.mostrar=true;
  }
}
enviarValoracion(valoracion: string) {
  this.valoracionRecibida = valoracion;
  this.mostrarVal=true;}
}
