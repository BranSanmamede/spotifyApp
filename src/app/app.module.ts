import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { AppRoutingModule } from './app-routing.module';
import { UtilService } from './services/utilService';
import { AlbumComponent } from './components/album/album';
import { PerformersComponent } from './components/performers/performers';
import { HomeComponent } from './components/home/home';
import { SongComponent } from './components/song/song';
import { FooterComponent } from './components/footer/footer';
import { TopTracksComponent } from './components/topTracks/topTracks';
import { SearchComponent } from './components/search/search';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopTracksComponent,
    AlbumComponent,
    PerformersComponent,
    SongComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
