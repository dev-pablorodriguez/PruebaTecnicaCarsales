import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonajesModule } from './personajes/personajes.module';
import { EpisodiosModule } from './episodios/episodios.module';

import localeChile from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeChile);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PersonajesModule,
    EpisodiosModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CL' 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
