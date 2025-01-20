import { Injectable } from '@angular/core';
import performers from '../../../public/json/performers.json';

@Injectable()
export class PerformerService {
  
  public performers:Performer[] = performers;
  
  findPerformers(text: string): Performer[] {
    return this.performers.filter(performers => performers.name.toLowerCase().includes(text.toLowerCase()));
  }

  getPerformerByID(id: number): Performer | undefined{
    return this.performers.find(performer => performer.id === id);
  }
}

export interface Performer {
  id: number,
  name: string, 
  bio: string,
  img: string,
  albums: number[],
  spotifyPath: string
}