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
  
  constructor(private utilService: UtilService, private router: Router) {}
  
  ngOnInit() {
    this.albums = this.utilService.getAlbums();
  }
  
  getSongName(id: number) {
    return this.utilService.getAlbumByID(id)?.name;
  }
  
  showAlbum(id: number) {
    this.router.navigate(['/album', id]);
  }
}