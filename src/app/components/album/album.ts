import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Album } from '../../interfaces/album';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.html'
})
export class AlbumComponent implements OnInit{
  
  album: Album| undefined;
  songs: Song[] = [];
  
  constructor(private utilService: UtilService, private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.album = this.utilService.getAlbumByID(parseInt(params['id']));
      if(this.album) {
        this.songs = this.album.songs.map(id => this.utilService.getSongByID(id)).filter((song): song is Song => song !== undefined);
      }
    });
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