import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  @Input()
  name: string = 'Tom Hanks'; //'Tom Hanks';
  @Input()
  role: string = 'usuario'; //'usuario';

  titulo: string = 'Componente User';
  @Output()
  selected = new EventEmitter<string>();

  isDisabled: boolean = true;

  seleccionar() {
    console.log(this.name);
    alert(this.name);
    this.selected.emit(this.name);
  }
}
