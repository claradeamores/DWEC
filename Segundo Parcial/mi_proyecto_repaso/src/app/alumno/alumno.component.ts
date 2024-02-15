import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
nombre: string = 'Carlos';
apellido: string='Cascón García';
edad: number =41;
dni: string='01234567A';
deshabilitado: boolean=true;
mensaje: string= 'Antes de pulsar';
checkBoxMarcado: boolean = false;

mostrarMensaje(){
  alert('Check marcado');
  this.mensaje='Despues de pulsar';
}

marcarSexo(event: any){
  if(event.target.value=='H'){
    this.mensaje='Pulsado Hombre';
  }
  else{
    this.mensaje='Pulsado Mujer';
  }
}

}
