import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Album } from '../../interfaces/album';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-topTracks',
  standalone: false,
  templateUrl: './topTracks.html'
})
export class TopTracksComponent implements OnInit, OnDestroy{
  
  songs!: Song[];
  albums!: Album[];
  selectedAlbum!: Album | null;
  showButton: boolean = false;
  currentIndex: number = 0;
  interval!: any;
  
  constructor(private utilService: UtilService, private router: Router) {}
  
  ngOnInit() {
    this.albums = this.utilService.getAlbums();
    if(this.albums.length > 0) {
      this.selectedAlbum = this.albums[0];
      this.loadSongsForAlbum();
      this.startAutoCarousel();
    }
  } 
  
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
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
  
  startAutoCarousel() {
    this.interval = setInterval(() => {
      if(this.currentIndex === this.albums.length) {
        this.currentIndex = 0;
      }
      this.selectedAlbum = this.albums[this.currentIndex++];
      this.loadSongsForAlbum();
    }, 5000);
  }
  
  selectAlbum(album: Album) {
    this.currentIndex = this.albums.indexOf(album);
    this.selectedAlbum = album;
    this.loadSongsForAlbum();
  }
  
  showAlbum(id: number) {
    this.router.navigate(['/album', id]);
  }
}