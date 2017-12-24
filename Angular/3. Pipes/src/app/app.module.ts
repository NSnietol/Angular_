import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header.component'
import {BodyComponent} from './components/body.component';
import { FooterComponent } from './footer/footer.component';
import { DonseguroPipe } from './pipes/donseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DonseguroPipe,
    ContrasenaPipe,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
