import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MensajeHijoComponent } from './mensaje-hijo/mensaje-hijo.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MensajeHijoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
