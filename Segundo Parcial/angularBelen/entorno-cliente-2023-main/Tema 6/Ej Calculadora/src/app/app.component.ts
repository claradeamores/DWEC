import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculadora';

  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.valor1 + this.valor2;
    // si valor1 fuera string: parseInt(this.valor1) + parseInt(this.valor2)
  }

  restar() {
    this.resultado = this.valor1 - this.valor2;
  }

  mult() {
    this.resultado = this.valor1 * this.valor2;
  }

  dividir() {
    if (this.valor2 == 0) this.resultado = 0;
    else this.resultado = this.valor1 / this.valor2;
  }
}
