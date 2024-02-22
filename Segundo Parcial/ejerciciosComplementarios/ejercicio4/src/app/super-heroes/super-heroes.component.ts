import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { heroes } from '../models/data';
import { SuperService } from '../services/super.service';

@Component({
  selector: 'app-super-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './super-heroes.component.html',
  styleUrl: './super-heroes.component.css'
})
export class SuperHeroesComponent implements OnInit{
  heroes$?:Observable<heroes>;
  constructor (private obtenerHeroes: SuperService){};
  ngOnInit(): void {
    this.heroes$=this.obtenerHeroes.getHeroe();
  };
}
