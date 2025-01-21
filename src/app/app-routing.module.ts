import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "header", loadChildren: () => import('./components/header/header').then(m => m.HeaderComponent) },
  { path: "home", loadChildren: () => import('./components/home/home').then(m => m.HomeComponent) },
  { path: "songs", loadChildren: () => import('./components/songs/songs').then(m => m.SongsComponent) },
  { path: "performers", loadChildren: () => import('./components/performers/performers').then(m => m.PerformerComponent) },
  { path: "song/:id", loadChildren: () => import('./components/song/song').then(m => m.SongComponent) },
  { path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }