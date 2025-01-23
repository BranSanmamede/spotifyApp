import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../../interfaces/song';
import { UtilService } from '../../services/utilService';

@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.html'
})
export class AlbumComponent implements OnInit{
  
  songs: Song[] = [];
  
  constructor(private utilService: UtilService, private router: Router) {}
  
  ngOnInit() {
    this.songs = this.utilService.getSongs();
  }

  getPerformerName(id: number) {
    return this.utilService.getPerformerByID(id)?.name;
  }
  
  showSong(id: number) {
    this.router.navigate(['/song', id]);
  }
  
  showPerformer(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.router.navigate(['/performer', id]);
  }
}