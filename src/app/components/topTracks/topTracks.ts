import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'app-topTracks',
  standalone: false,
  templateUrl: './topTracks.html'
})
export class TopTracksComponent implements OnInit{
  
  albums: Album[] = [];
  selectedAlbum: Album | null = null;
  
  constructor(private utilService: UtilService, private router: Router) {}
  
  ngOnInit() {
    this.albums = this.utilService.getAlbums();
    if(this.albums.length > 0) {
      this.selectedAlbum = this.albums[0];
    }
  }

  selectAlbum(album: Album) {
    this.selectedAlbum = album;  
  }
  
  showAlbum(id: number) {
    this.router.navigate(['/album', id]);
  }
}