import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
import { SongComponent } from './components/song/song';


const routes: Routes = [
  {path: "header", component: HeaderComponent},
  { path: "home", component: HomeComponent },
  { path: 'song/:id', component: SongComponent },
  { path: 'performer/:id', component: PerformerComponent },
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }