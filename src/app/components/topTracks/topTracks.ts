import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Album } from '../../interfaces/album';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-topTracks',
  standalone: false,
  templateUrl: './topTracks.html'
})
export class TopTracksComponent implements OnInit{
  
  songs: Song[] = [];
  albums: Album[] = [];
  selectedAlbum: Album | null = null;
  showButton: boolean = false;
  
  constructor(private utilService: UtilService, private router: Router) {}
  
  ngOnInit() {
    this.albums = this.utilService.getAlbums();
    if(this.albums.length > 0) {
      this.selectedAlbum = this.albums[0];
      this.loadSongsForAlbum();
    }
  }

  loadSongsForAlbum() {
    if(this.selectedAlbum != null) {
      if(this.selectedAlbum.songs.length) {
        this.songs = this.selectedAlbum.songs.map(id => this.utilService.getSongByID(id)).filter(song => song !== undefined);
      }
    }else {
      this.songs = [];
    }
  }

  selectAlbum(album: Album) {
    this.selectedAlbum = album;  
    this.loadSongsForAlbum();
  }
  
  showAlbum(id: number) {
    this.router.navigate(['/album', id]);
  }
}