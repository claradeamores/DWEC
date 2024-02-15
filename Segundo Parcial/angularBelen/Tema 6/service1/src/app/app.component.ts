import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';
import { pokemonList } from './model/pokemonList.model';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pokemonList$ = new Observable<pokemonList>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getpokemonListParam(0, 20);
    //this.getpokemonListParam();
  }

  /*getpokemonListParam() {
    
  }*/
}
