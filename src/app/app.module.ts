import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { AppRoutingModule } from './app-routing.module';
import { UtilService } from './services/utilService';
import { SongsComponent } from './components/songs/songs';
import { PerformerComponent } from './components/performers/performers';
import { HomeComponent } from './components/home/home';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SongsComponent,
    PerformerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
