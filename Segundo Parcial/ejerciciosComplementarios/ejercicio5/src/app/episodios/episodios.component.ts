import { Component, OnInit } from '@angular/core';
import { episodios } from '../models/dataModel';
import { Observable } from 'rxjs';
import { EpisodiosListService } from '../services/episodios-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent implements OnInit {
  title: string = 'Episodios de Rick Y Morti';
  epidosios?:Observable<episodios>;
  constructor(private obtenereEpisodio: EpisodiosListService) {}
  ngOnInit(): void {
    this.epidosios = this.obtenereEpisodio.getepisodios();
  }


}
