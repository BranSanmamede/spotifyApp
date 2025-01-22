import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { HeaderComponent } from './components/header/header';
import { SongsComponent } from './components/songs/songs';
import { PerformersComponent } from './components/performers/performers';
import { SongComponent } from './components/song/song';


const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: "songs", component: SongsComponent },
  { path: "performers", component: PerformersComponent },
  { path: "song/:id", component: SongComponent },
  { path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }