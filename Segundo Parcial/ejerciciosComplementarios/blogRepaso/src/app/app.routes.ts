import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'post', component:PostComponent},
  {path:'**', component:HomeComponent},
];
