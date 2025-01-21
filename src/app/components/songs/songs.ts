import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../../interfaces/song';
import { UtilService } from '../../services/utilService';

@Component({
  selector: 'app-songs',
  standalone: false,
  templateUrl: './songs.html'
})
export class SongsComponent implements OnInit{
  
  songs: Song[] = [];
  
  constructor(private utilService: UtilService, private router: Router) {}
  
  ngOnInit() {
    this.songs = this.utilService.getSongs();
  }

  getPerformerName(id: number) : string {
    let performer = this.utilService.getPerformerByID(id);
    return performer ? performer.name : "Desconocido";
  }
  
  showSong(id: number) {
    this.router.navigate(['/song', id]);
  }
  
  showPerformer(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.router.navigate(['/performer', id]);
  }
}