import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Clases de angular';
  nombre: string = 'Belén';

  edad: number = 18;

  getEdad(): number {
    return this.edad;
  }
}
