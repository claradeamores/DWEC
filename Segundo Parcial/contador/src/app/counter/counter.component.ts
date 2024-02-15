import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  title: string = 'Contador';
  valor: number=10;

  sumar(){
    this.valor++;
  }
  restar(){
    this.valor--;
  }
  reset(){
    this.valor=10;
  }

}
