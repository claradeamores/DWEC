import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../services/planetas.service';
import { Observable } from 'rxjs';
import { Planet, PlanetList } from '../model/planet';
import { CommonModule } from '@angular/common';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [CommonModule, PlanetDetailComponent],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent implements OnInit {
  planetas$ = new Observable<PlanetList>();

  constructor(private servicioPlaneta: PlanetasService) {}

  ngOnInit(): void {
    this.planetas$ = this.servicioPlaneta.getPlanets();
  }
}
