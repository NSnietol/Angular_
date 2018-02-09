import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";


import {APP_ROUTING} from "./app.routes"; 

import { AppComponent } from './app.component';


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { DomseguroPipe } from './pipes/domseguro.pipe'
import {solicitudC} from "./services/solicitudC"

// services
import { SpotifyService } from './services/spotify.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';
import { SongComponent } from './components/song/song.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CarouselComponent,
    DomseguroPipe,
    SinfotoPipe,
    ArtistaComponent,
    SongComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
  
    APP_ROUTING
  ],
  providers: [SpotifyService,solicitudC],
  bootstrap: [AppComponent]
})
export class AppModule { }
