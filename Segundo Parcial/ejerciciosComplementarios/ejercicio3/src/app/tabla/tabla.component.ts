import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { resultado } from '../models/data';
import { RandomService } from '../services/random.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  persona$?:Observable<resultado>;
  constructor(private obtenerAleatorio: RandomService){};
    ngOnInit(): void {
      this.persona$=this.obtenerAleatorio.getDiez();
  }

}
