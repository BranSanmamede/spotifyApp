import { Injectable } from '@angular/core';
import performers from '../../../public/json/performers.json';
import songs from '../../../public/json/songs.json';
import { Performer } from '../interfaces/performer';
import { Song } from '../interfaces/song';

@Injectable()
export class UtilService {
  
  private performers:Performer[] = performers;
  private songs:Song[] = songs;
  
  getSongs() {
    return this.songs;
  }
  
  getPerformers() {
    return this.performers;
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