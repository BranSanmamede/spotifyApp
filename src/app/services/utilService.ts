import { Injectable } from '@angular/core';
import performers from '../../../public/json/performers.json';
import songs from '../../../public/json/songs.json';
import albums from '../../../public/json/albums.json';
import topTracks from '../../../public/json/topTracks.json';
import { Performer } from '../interfaces/performer';
import { Song } from '../interfaces/song';
import { Album } from '../interfaces/album';

@Injectable()
export class UtilService {
  
  private performers:Performer[] = performers;
  private songs:Song[] = songs;
  private albums:Album[] = albums;
  private topTracks:number[] = topTracks;
  
  getAlbums() {
    return this.albums;
  }
  
  getSongs() {
    return this.songs;
  }
  
  getPerformers() {
    return this.performers;
  }

  getTopTracks() {
    return this.topTracks.map(id => this.getAlbumByID(id)).filter(album => album != undefined);
  }
  
  getAlbumByID(id: number): Album | undefined{
    return this.albums.find(album => album.id === id);
  }
  
  getSongByID(id: number): Song | undefined{
    return this.songs.find(song => song.id === id);
  }
  
  getPerformerByID(id: number): Performer | undefined{
    return this.performers.find(performer => performer.id === id);
  }
  
  findSongs(text: string): Song[] {
    return this.songs.filter(song => song.name.toLowerCase().includes(text.toLowerCase()));
  }
  
  findPerformers(text: string): Performer[] {
    return this.performers.filter(performers => performers.name.toLowerCase().includes(text.toLowerCase()));
  }
}