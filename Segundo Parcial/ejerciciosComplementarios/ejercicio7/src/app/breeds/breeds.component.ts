import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { breedList } from '../models/data';
import { Observable } from 'rxjs';
import { BreedListService } from '../services/breed-list.service';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css'
})
export class BreedsComponent implements OnInit{
  titulo:string='Gatitos';
  gatos$?:Observable<breedList>;
  constructor(private obtenerGatos: BreedListService){}
  ngOnInit(): void {
    this.gatos$=this.obtenerGatos.getRazas();
  }
;

}
