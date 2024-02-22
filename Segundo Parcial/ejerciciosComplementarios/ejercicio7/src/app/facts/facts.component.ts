import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { factsList } from '../models/data';
import { FactsListService } from '../services/facts-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css'
})
export class FactsComponent implements OnInit{
  titulo:string='Comentarios';
  facts$?:Observable<factsList[]>;
  constructor (private obtenerFacts : FactsListService){}
  ngOnInit(): void {
    this.facts$=this.obtenerFacts.getFacts();
  }

}
