import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicioService } from '../services/servicio.service';
import { User } from '../model/usuarios.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css',
})
export class DetalleUsuariosComponent implements OnInit {
  usuario$?: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userService: ServicioService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.usuario$ = this.userService.getUsuario(userId);
  }
}
