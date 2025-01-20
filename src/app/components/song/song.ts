import { Component, OnInit } from '@angular/core';
import { Song, SongService } from '../../services/songService';
import { Router } from '@angular/router';
import { PerformerService } from '../../services/performerService';

@Component({
  selector: 'app-song',
  standalone: false,
  templateUrl: './song.html'
})
export class SongComponent implements OnInit{
  
  songs: Song[] = [];
  
  constructor(private songService: SongService, private performerService: PerformerService,private router: Router) {}
  
  ngOnInit() {
    this.songs = this.songService.songs;
  }

  getPerformerName(id: number): string {
    let performer = this.performerService.getPerformerByID(id);
    return performer ? performer.name : "undefined";
  }
  
  showSong(id: number) {
    this.router.navigate(['/song', id]);
  }
  
  showPerformer(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.router.navigate(['/performer', id]);
  }
}