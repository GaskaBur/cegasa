import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importo el módulo de cegasa
import { CegasaModule } from './cegasa/cegasa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CegasaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
