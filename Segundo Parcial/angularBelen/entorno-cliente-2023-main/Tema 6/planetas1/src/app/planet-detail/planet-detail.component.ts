import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../model/planet';
import { Observable } from 'rxjs';
import { PlanetasService } from '../services/planetas.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css',
})
export class PlanetDetailComponent implements OnInit {
  planeta$ = new Observable<Planet>();

  constructor(private servicioPlaneta: PlanetasService) {}

  ngOnInit(): void {
    this.planeta$ = this.servicioPlaneta.getPlaneta();
  }
}
