import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { aleatorio, resultado } from '../models/data';
import { RandomService } from '../services/random.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aleatorio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent implements OnInit{
  persona$?:Observable<resultado>;
  constructor(private obtenerAleatorio: RandomService){};
    ngOnInit(): void {
      this.persona$=this.obtenerAleatorio.getUno();
  }

}
