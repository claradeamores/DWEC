import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-libro',
  standalone: true,
  imports: [],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css'
})
export class DatosLibroComponent {
 libro={
  titulo:'El Señor de los Anillos',
  autor: 'J.R.R. tolkien',
  precio: 62.95,
  stock: 0,
  imagen: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/0f3e9961-b7a8-45e3-b796-8b61d9c635c2/d_360_620/portada_pack-trilogia-el-senor-de-los-anillos_j-r-r-tolkien_202206071544.webp',
 }

}
