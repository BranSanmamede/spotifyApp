import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { HeaderComponent } from './components/header/header';
import { AlbumComponent } from './components/album/album';
import { PerformersComponent } from './components/performers/performers';
import { SongComponent } from './components/song/song';
import { FooterComponent } from './components/footer/footer';


const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: "album/:id", component: AlbumComponent },
  { path: "performers", component: PerformersComponent },
  { path: "song/:id", component: SongComponent },
  { path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }