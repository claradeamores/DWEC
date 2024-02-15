import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'detalle/:id', component: DetalleUsuariosComponent },
  { path: '**', redirectTo: 'home' },
];
