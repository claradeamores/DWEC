import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';
import { AlunmnoComponent } from './alumno/alunmno/alunmno.component';

@NgModule({
  declarations: [AppComponent, UserProfileComponent, DatosLibroComponent, AlunmnoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
