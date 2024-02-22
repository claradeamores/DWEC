import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { TablaComponent } from './tabla/tabla.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aleatorio', component:AleatorioComponent},
  {path:'tabla', component:TablaComponent},
  {path:'**', component:HomeComponent},
];
