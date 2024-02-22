import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../models/dataUsers';
import { Observable } from 'rxjs';
import { ApiDataService } from '../services/api-data.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  titulo = 'Validar Usuario';
  usuarioNum: number=0;
  usuario$?: Observable<Usuarios>;
  botonOk:boolean=true;
  mensajeErr:string='Debe introducir un número válido';

  constructor(private obtenerUsuario: ApiDataService) {}

  mostrarUsuario(event:any) {
    var num=this.usuarioNum;
    if (this.usuarioNum == null || this.usuarioNum<=0) {
      this.botonOk=false;
    }
    else{
      this.usuario$ = this.obtenerUsuario.getUsuario(num);
      this.botonOk=true;
    }
  }
}
