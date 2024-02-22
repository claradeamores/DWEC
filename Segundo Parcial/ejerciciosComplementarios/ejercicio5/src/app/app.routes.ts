import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RickComponent } from './rick/rick.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'rick', component:RickComponent},
  {path:'episodios', component:EpisodiosComponent},
  {path:'localizacion', component:LocalizacionComponent},
  {path:'**', component:HomeComponent},
];
