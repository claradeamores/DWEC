import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from './libro-modificacion/libro-modificacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libros/:id', component: DetalleLibroComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'libroNuevo', component: LibroNuevoComponent },
  { path: 'modificar/:id', component: LibroModificacionComponent },
  { path: '**', redirectTo: '/home' },
];
