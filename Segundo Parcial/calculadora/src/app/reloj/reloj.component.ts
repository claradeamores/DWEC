import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css'
})
export class RelojComponent {
numa: number= 0;
numb: number= 0;
res: number= 0;
suma(){
  this.res=this.numa+this.numb;
}
resta(){
  this.res=this.numa-this.numb;
}
mult(){
  this.res=this.numa*this.numb;
}
div(){
  this.res=this.numa/this.numb;
}
reset(){
  this.res=0;
  this.numa=0;
  this.numb=0;
}
}
