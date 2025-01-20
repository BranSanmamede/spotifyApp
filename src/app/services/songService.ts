import { Injectable } from '@angular/core';
import songs from '../../../public/json/songs.json';

@Injectable()
export class SongService {

  public songs:Song[] = songs;
  
  findSongs(text: string): Song[] {
    return this.songs.filter(song => song.name.toLowerCase().includes(text.toLowerCase()));
  }
}

export interface Song {
  id: number,
  name: string, 
  img: string,
  performers: number[]
}