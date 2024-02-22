import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { factList } from '../models/data';
import { FactListService } from '../services/fact-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fact.component.html',
  styleUrl: './fact.component.css'
})
export class FactComponent {
  titulo:string='Frases de gatos';
  num: number = 0;
  frase?: Observable<factList>;
  constructor(private obtenerFrase: FactListService) {}

  mostrarFrase() {
    this.frase = this.obtenerFrase.getFrase(this.num);
  }

}
