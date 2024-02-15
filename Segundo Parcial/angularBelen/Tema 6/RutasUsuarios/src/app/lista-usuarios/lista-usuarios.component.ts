import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

import { Observable } from 'rxjs';
import { User } from '../model/usuarios.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css',
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: User[] = []; // Asumiendo que tienes una interfaz para el modelo de datos de usuario
  listaUsuarios$?: Observable<User[]>;
  constructor(private userService: ServicioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.listaUsuarios$ = this.userService.getUsers();
  }
}
