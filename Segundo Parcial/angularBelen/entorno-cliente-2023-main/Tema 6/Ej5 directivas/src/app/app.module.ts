import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { FormsModule } from '@angular/forms';
import { Logger } from './services/logger.service';
import { Logger2 } from './services/logger2.service';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component';
import { CaracteristicasArticuloComponent } from './caracteristicas-articulo/caracteristicas-articulo.component';
import { ServicioArticuloService } from './services/servicio-articulo.service';
import { ArticuloService } from './services/articulo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonasComponent,
    ArticuloComponent,
    ListadoArticulosComponent,
    CaracteristicasArticuloComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    ServicioArticuloService,
    ArticuloService,
    Logger, // 1 forma: utiliza esa clase tal cual.
    //{ provide: Logger, useClass: Logger2 }, //2. cuado pidan logger, voy a utilizar logger2.
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
