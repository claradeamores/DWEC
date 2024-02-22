import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { FactsComponent } from './facts/facts.component';
import { FactComponent } from './fact/fact.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'breeds', component:BreedsComponent},
  {path:'facts', component:FactsComponent},
  {path:'fact', component:FactComponent},
  {path:'**', component:HomeComponent},
];
