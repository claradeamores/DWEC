import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { receta } from '../models/datos';
import { RecetaUrlService } from '../services/receta-url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css'
})
export class RecetaComponent{
  titulo: string = 'Recetas';
  mostrar:boolean=false;
  botonOk:boolean=false
  recetas$?: Observable<receta>;

  constructor(private obtenerReceta: RecetaUrlService) { }

  getIngredientes(receta: any): string[] {
    const ingredientes: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingrediente = receta['strIngredient' + i];
      if (ingrediente && ingrediente.trim() !== '') {
        ingredientes.push(ingrediente);
      }
    }
    return ingredientes;
  }
  mostrarReceta(){
    this.recetas$ = this.obtenerReceta.getRecetas();
    this.botonOk=true;
    this.mostrar=false;
  }
  mostrarInstrucciones(){
    this.mostrar=true;
  }
;
}
