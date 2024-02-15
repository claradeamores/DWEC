import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlanetListComponent, PlanetDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'planetas1';
}
