import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public counter: number = 10;
  titulo: string = 'Componente contador';

  increaseBy(): void {
    this.counter = this.counter + 1;
  }

  decreaseBy(): void {
    this.counter = this.counter - 1;
  }

  reset(): void {
    this.counter = 10;
  }
}
